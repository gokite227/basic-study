def number_baseball(correct_value, predict_value):
    # 정답과 예측값의 숫자 야구 점수를 계산하는 함수를 작성해 봅시다.
    correct_list = []
    predict_list = []
    ret = 0
    
    for i in range(3):
        correct_list.append(correct_value%10)
        correct_value//=10
        predict_list.append(predict_value%10)
        predict_value//=10
        
    for correct_idx in range(3):
        for predict_idx in range(3):
            if correct_list[correct_idx]==predict_list[predict_idx]:
                if correct_idx==predict_idx:
                    ret+=3
                else:
                    ret+=1
    return ret
    
# 정답 입력받기
correct = int(input())

score = 0

for i in range(5):
    # 예측값 입력받기
    predict = int(input())
    # number_baseball 호출해봅시다.
    score += number_baseball(correct, predict)

print(score)
