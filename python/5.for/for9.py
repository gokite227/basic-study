#리스트 요소의 값을 반복문을 사용하여 거꾸로 출력 시키시오
#이 문제는 리스트의 값들을 거꾸로 출력시킬 때 필요한게 무엇인지를 아는지 묻는 문제이다

lst= [ 'dog', 'hippo', 'elephant', 'lion', 'tiger', 'alligator']

for i in reversed(lst):
    print(i, " ", end = "") 