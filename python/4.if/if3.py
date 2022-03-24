#아래의 if 조건문에서 else 문의 위치에 따라 에러가 나는 것 을 말해보시오

btn = 1
if btn == 1:
    print('아메리카노')

else: 
    print('메뉴는 1,2,3번중 하나를 골라주세요!')

# elif btn == 2:
#     print('카페라뗴')

# elif btn == 3 :
#     print('아이스 카페라떼')
#else 문이 있으면 if문이 끝나는것으로 인식하기 때문에 elif문을 인식하지못해서 오류가 난다

btn = 3

if btn == 1:
    print('아메리카노')

elif btn == 2:
    print('카페라뗴')

elif btn == 3 :
    print('아이스 카페라떼')

#else 문이 필수는 아니기 때문에 오류가 나지 않는다