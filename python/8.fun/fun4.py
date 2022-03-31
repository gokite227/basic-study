#아래와 같은 조건을 만족하는 약수의 갯수 반환 함수 num_divisor을 완성하세요.

def num_divisor(num):
    # 코드를 작성하세요.
    num_div=0
    for i in range(1,num+1):
        if num%i==0:
            num_div+=1
    return num_div

x = int(input())

print(num_divisor(x))