#include<wiringPi.h>
#include<stdio.h>
#include<softPwm.h>

void main()
{
	int sg90 = 18;
	int degree;
	wiringPiSetupGpio();
	softPwmCreate(sg90, 0, 200);
	for(degree = 6; degree <= 25; degree++){
		softPwmWrite(sg90, degree);
		delay(1);
	}
	for(degree = 25; degree >= 6; degree--){
		softPwmWrite(sg90, degree);
		delay(1);
	}
}
