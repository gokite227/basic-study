#include <stdio.h>
#include <netinet/in.h>
#include <sys/socket.h>
#include <string.h>
#include <pthread.h>
#include <unistd.h>
#include <stdlib.h>
#include <arpa/inet.h>
#define BUFSIZE 100
#define PORT 9000

void* send_message(void *arg);
void* recv_message(void *arg);
void error_handling(char *message);
char s_message[BUFSIZE];
char r_message[BUFSIZE];

int main(int argc, char **argv)
{
	int sock;
	struct sockaddr_in s_addr;
	pthread_t snd_thread, rcv_thread;
	void *thread_result;

	if(argc != 3){
		printf("usage : %s <ip> <port>\n", argv[0]);
		exit(1);
	}

	sock = socket(PF_INET, SOCK_STREAM, 0);
	if(sock == -1) 
		error_handling("socket() error");
	memset(&s_addr, 0, sizeof(s_addr));
	s_addr.sin_family = AF_INET;
	s_addr.sin_addr.s_addr=inet_addr(argv[1]);
	s_addr.sin_port=htons(atoi(argv[2]));
	if(connect(sock,(struct sockaddr*)&s_addr, sizeof(s_addr)) == -1)
		error_handling("connect() error!");
	pthread_create(&snd_thread, NULL, send_message, (void*)sock);
	pthread_create(&rcv_thread, NULL, recv_message, (void*)sock);

	pthread_join(snd_thread, &thread_result);
	pthread_join(rcv_thread, &thread_result);
	close(sock);
	return 0;
}

void* send_message(void *arg)
{
	int sock = (int)arg;
	while(1){
		fgets(s_message, sizeof(s_message), stdin);
		if(!strcmp(s_message, "quit\n")){
			close(sock);
			exit(0);
		}
		printf("input : %s\n", s_message);
		write(sock, s_message, strlen(s_message));
	}
}

void* recv_message(void* arg)
{
	int sock = (int) arg;
	int str_len;
	while(1)
	{
		str_len=read(sock, r_message, BUFSIZE);
		if(str_len == -1) return (void*) 1;
		r_message[str_len] = '\0';
		fprintf(stdout, "received : %s\n", r_message);
	}
}

void error_handling(char *message)
{
	fprintf(stderr, "%s", message);
	exit(1);
}
