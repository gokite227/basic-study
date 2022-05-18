#include <stdio.h>
#include <stdlib.h>
#include <netinet/in.h>
#include <sys/socket.h>
#include <string.h>
#include <pthread.h>
#include <unistd.h>
#include <wiringPi.h>
#define PORT 9000

void *do_led(void *);

int main()
{
	int c_socket, s_socket;
	struct sockaddr_in s_addr, c_addr;
	int len;
	int i;
	pthread_t tid;
	int str;
	s_socket = socket(PF_INET, SOCK_STREAM, 0);

	memset(&s_addr, 0, sizeof(s_addr) );
	s_addr.sin_addr.s_addr = htonl(INADDR_ANY);
	s_addr.sin_family = AF_INET;
	s_addr.sin_port = htons(PORT);

	if(bind(s_socket, (struct sockaddr*)&s_addr, sizeof(s_addr)) == -1) {
		printf("Can not Bind\n");
		return -1;
	}

	if(listen(s_socket, 5) == -1) {
		printf("listen Fail\n");
		return -1;
	}

	wiringPiSetupGpio();
	while(1){
		len = sizeof(c_addr);
		c_socket = accept(s_socket, (struct sockaddr*)&c_addr, &len);

		str = pthread_create(&tid, NULL, do_led, (void *)&c_socket);
	}
	close(s_socket);
}

void *do_led(void *data)
{
	char rBuffer[BUFSIZ];
	char *temp;
	int length;
	int n;
	int c_socket = *(int*)data;

	while(1) {
		length = 0;
		temp = rBuffer;
		while ((n = read(c_socket, temp, 1)) > 0) {
			if(*temp == '\r') continue;
			if(*temp == '\n') break;
			if(*temp == '\0') break;

			if(length == BUFSIZ) break;
			temp++; length++;
		}

		rBuffer[length] = '\0';
		printf("[%s]\n", rBuffer);

		if( !strcmp(rBuffer, "quit")) {
			close(c_socket);
			break;
		}else if(!strncmp(rBuffer, "/led", 4)){
			char *p;
			int led_no;

			p = strtok(rBuffer, " ");
			p = strtok(NULL, " ");
			led_no = atoi(p);
			p = strtok(NULL, " ");
			pinMode(led_no, OUTPUT);
			if(!strcmp(p, "on"))digitalWrite(led_no, HIGH);
			else if(!strcmp(p, "off")) digitalWrite(led_no, LOW);
		}else{
			n = strlen(rBuffer);
			write(c_socket, rBuffer, n);
		}
	}
}
