#리스트에 들어있는 동물중 중복된 동물을 제거 하여 출력하시오

lst = [ 'dog', 'hippo', 'elephant', 'lion', 'tiger', 'alligator', 'hippo', 'lion' ]

a = set(lst)
print(a, type(a))

b = []
for i in lst:
    if i not in b:
        b.append(i)

print(b, type(b))

