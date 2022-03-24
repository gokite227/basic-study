#is 연산자

a = "korea"
print(1,a,id(a))

b = "korea"
print(2,b,id(b))
print(a is b) #True

b += "!"
print(3,b,id(b))
print(a is b) #False

c = b[:-1]
print(4,c,id(c))
print(a is c) #False 리스트니까