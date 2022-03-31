#보색 변환 (Complementary color) 이란 색상 대비를 이루는 보색으로 변환하는 것을 의미합니다.
#예를 들어, 아래 색상표에서 보이듯 빨강은 청록색으로 변환되는 것을 의미합니다. 보색 변환함수(color_complementary(r,g,b))를 구현해보도록 합시다.

def color_complementary(r,g,b):
# 보색 변환 함수를 구현해 보세요.
    br = 255 - r
    bg = 255 - g
    bb = 255 - b
    return br , bg , bb

# 사용자에게 input을 사용하여 3개의 값을 받습니다. (각각 r,g,b)를 나타내는 수치들 입니다.
a=int(input())
b=int(input())
c=int(input())

# color_complementary(r,g,b) 함수를 호출하여 보색변환 이후의 r,g,b값을 comma로 구분된 괄호의 형태로 출력합니다.
a,b,c = color_complementary(a,b,c)
print('(',a,',',b,',',c,')')