#is 연산자 == 연산자 비교
#숫자,문자열은 같은 값으면 따로 할당 x

#숫자
a = 101
b = 100 + 1

print(a is b) #True
print(a == b) #True
print(id(a) , id(b))

#문자열
c = 'korea'
d = 'korea'

print(c is d) #True
print(c == d) #True
print(id(c) ,id(d))

#리스트
e = [1,2,3,4,5]
f = [1,2,3,4,5]

print(e is f) #False
print(e == f) #True
print(id(e) ,id(f))


