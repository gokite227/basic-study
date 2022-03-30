#a = [ i , j for i in range(3) for j in range(3)] 왼쪽의 list comprehension 결과를 말해보시오 . ★★★

a = [ i + j for i in range(3) for j in range(3)]
print(a)