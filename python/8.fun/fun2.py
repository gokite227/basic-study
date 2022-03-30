#변수의 메모리 주소값을 출력 하여 다른 함수내 같은 변수의 값들이 어떤 주소를 가지고 있는지 출력하시오

def a(i):
    print(id(i))

a(a)

def b(j):
    print(id(j))

a(b)