#include<wiringPi.h>
#include<stdio.h>
#include<softPwm.h>
void main()
{ 
	int led = 18;
	int i;
	wiringPiSetupGpio;
	softPwmCreate(led,0,100);
	for(i=0; i<=10; i++){
		softPwmWrite(led,i*10);
		printf("HIGH:LOW=%d:%d\n",i,10-i);
		delay(1000);
	}
}
