#수학에서 거듭제곱은 빼놓을 수 없는 연산입니다.거듭제곱 연산을 매개 변수와 반환값을 가진 함수로 구현해 봅시다.

def my_power(a,b):
#여기에 거듭제곱에 관련된 코드를 작성해주시기 바랍니다. 거듭제곱 결과값을 return 해주어야 합니다
    por = a**b
    return por
# my_power을 사용하는 code입니다. 수정하지 마십시오.
x = int(input())
y = int(input())
print(my_power(x,y))