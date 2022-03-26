#1 부터 100 까지의 수에서 짝수들만 출력 하는 코드를 구현하시오
#두 가지 방식 을 생각해서 구현해보시오

for i in range(1, 101):
    if(i%2 == 0):
        print(i, " ", end = "")

print(" ")

for i in range(1, 101):
    if(i%2 != 1):
        print(i, " ", end = "")