#인덱스와 반복문을 사용하여 리스트 요소의 값들을 모두 출력 하시오


a = [ 100, 200, 300, 400, 500, [1, 2, 3], (4, 5, 6) ]

for i in range(0,6):
    print(i, "=",a[i], " ", end = "")