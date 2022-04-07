# 기본 코드입니다. 수정하지 마세요.
matrix = [[4,7,2,1,0,2],[2,3,5,7,9,5],[2,5,2,3,4,1],[7,5,3,2,1,5],[3,9,2,7,8,10],[0,6,2,3,9,2]] #행과 열이 둘 다 6개인 행렬입니다.

# 이제 코딩을 시작하세요!
index_list=[]
for i in range(0,6):
    for j in range(0,6):
        if matrix[i][j] > 5 :
            index_list.append((i,j))
                
index_list.sort()
print(index_list)
