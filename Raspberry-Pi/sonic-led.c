#include<wiringPi.h>
#include<stdio.h>

	int trig = 23;
	int echo = 24;
	int led = 18;


float getDistance(){
	int start_time, end_time;
	float distance;

	digitalWrite(trig, LOW);
	delay(500);

	digitalWrite(trig, HIGH);
	delayMicroseconds(10);
	digitalWrite(trig, LOW);

	while(digitalRead(echo) == 0);
	start_time = micros();

	while(digitalRead(echo) == 1);
	end_time = micros();

	distance = (end_time - start_time)/2.0*0.034;
	return distance;
}

void main()
{
	float dis;

	wiringPiSetupGpio();
	pinMode(trig, OUTPUT);
	pinMode(echo, INPUT);
	pinMode(led, OUTPUT);

	while(1){
		dis = getDistance();
		if(dis <10.0)
			digitalWrite(led, HIGH);
		else
			digitalWrite(led, LOW);
	}
}
	

