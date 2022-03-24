#slice, id() 및 is() 연산자
#예외 전체 슬라이스 경우 변수가 같다면 새로 할당 x

t = "korea"

print(t, id(t), '--', t[:1], id(t[:1]), ' --', t[:2], id(t[:2]), ' --', t[:3],id(t[:3]), ' --', t[:4], id(t[:4]))
#korea k ko kor
print(t,id(t[:]))

print(t is t[:]) #False
print(t is t[:1])
print(t[:1] is t[:2] )
print(t[:] is t[:5] )