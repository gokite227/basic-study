#리스트 컴프리헨션 (list 이란 무엇인지 예제를 통해 설명 해보시오

lst = []

for i in range(1, 10+1):
    lst.append(i)

print(lst)

print([i for i in range(1,11)])

print(list(range(1,11)))
