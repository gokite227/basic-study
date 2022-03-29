#아래의 자료구조에 접근시 에러가 나는 것은 무엇이고 그 이유를 설명 해보시오

# [1] :리스트
a = [ 'dog', 'hippo', 'elephant', 'lion', 'tiger', 'alligator', 'hippo', 'lion' ]
print( '[1] lion출력하기 : ', a[3])
# [2] :집합
b = set( a )
print( '[2] lion출력하기 : ', b[3])

#오류 이유 set을 이용하면 자료 타입이 리스트가 아닌 set 이어서 리스트 인덱스로는 접근 할수 없다.