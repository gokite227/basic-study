#사용자로 부터 숫자 아스키 코드 를 입력받아 그에 해당하는 문자를 출력 하는 프로그램을 구현하시오


a = input('숫자를 입력하면 해당하는 문자를 출력해드려요')
#print(a,type(a))    #타입이 str

a = int(a)          #int타입으로 변경
#print(a,type(a))

print('입력한 숫자의 문자는 : ', chr(a))
