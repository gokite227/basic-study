#is 연산자
#두 객체가 동일한 "주소"에 할당된 객체임을 비교

a = [1,2,3,4,5]
b = a
c = [1,2,3,4,5]

print(a is b)
print(a is c)
print(b is c)