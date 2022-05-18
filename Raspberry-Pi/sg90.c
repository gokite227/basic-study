#include<wiringPi.h>
#include<stdio.h>
#include<softPwm.h>

void main()
{
	int sg90 = 18;
	int degree;
	wiringPiSetupGpio();
	softPwmCreate(sg90, 0, 200);
	while(1){
		printf("input(0:0, 1:90, 2:180)?");
		scanf("%d", &degree);
		printf("degree = %d", degree*90);
		if(degree == 0)
			softPwmWrite(sg90, 6);
		else if(degree == 1)
			softPwmWrite(sg90, 15);
		else if(degree == 2)
			softPwmWrite(sg90, 25);
		}
}
