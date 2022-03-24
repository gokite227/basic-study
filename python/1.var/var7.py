#id 함수 이용
#주소 보여주는 함수

a = '붕어빵'
print(a, '-->', id(a))

b = a
print(b, '-->', id(b))

a = '잉어빵'
print(a, '-->', id(a))