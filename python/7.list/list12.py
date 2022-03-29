#동물원에서 원하는 동물의 케이지를 찾아서 출력 하는 코드를 구현하시오

animals = [ 'elephant', 'hippo', 'lion', 'tiger', 'alligator' ]

f = input("케이지를 알고 싶은 동물의 이름을 입력하세요 =")

print(f, "동물의 케이지는",animals.index(f), "번 위치에 있습니다.",animals.index(f),"번 케이지 약도를 출력하시겠습니까?")