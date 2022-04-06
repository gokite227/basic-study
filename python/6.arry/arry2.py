data_list = []

#data_list에 input 추가하는 부분
for i in range(10):
    data_list.append(int(input()))
    
# 이중 음수가 아닌 가장 작은 수와 인덱스를 찾아 봅시다
is_exist=False
idx=0

for a in data_list:
    if a>=0:
        if not(is_exist):
            tmp = a
            tmp_idx = idx
            is_exist=True
        elif tmp>a:
            tmp = a
            tmp_idx = idx
    idx+=1

if is_exist:
    print(tmp)
    print(tmp_idx)
else:
    print('전부 음수입니다.')
