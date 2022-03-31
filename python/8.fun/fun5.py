#두 점 사이의 거리는 x, y축의 차이의 제곱을 더한 후 루트를 취해 계산됩니다.

from math import sqrt
def distance(x1, y1, x2=0, y2=0):
    return sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
print(distance(3,4))