# for반복문을 사용해서 4 부터 21 까지의 홀수들의 합 을 구하는 코드를 구현하시오

sum = 0

for i in range(4, 22):
    if(i%2 != 0):
        sum = sum + i

print(sum)