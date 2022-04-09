# 기본 코드입니다. 수정하지 마세요.
score = {"John": 89, "Jenny": 19, "Henry": 58, "Leia": 93, "Minsaku": 91, "Juho": 78, "Harry": 49, "Kim":67,"Gabriel": 37}

threshold = int(input())
# 여기서부터 코딩해주시면 됩니다.
passsc = []
for key, value in score.items():
    if value >= threshold:
        passsc.append(key)
        
print(passsc)
print(passsc.sort())
