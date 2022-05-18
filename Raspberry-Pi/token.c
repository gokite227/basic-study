#include <stdio.h>
#include <string.h>
#include <unistd.h>

void main()
{
	char rBuffer[30] = "/led 18 on";
	char *p;

	p=strtok(rBuffer, " ");
	while(p != NULL){
		printf("%s\n",p);
		p = strtok(NULL, " ");
	}
}
