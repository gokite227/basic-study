#역인덱스를 사용하여 영어 점수를 오름차순과 내림차순으로 출력 시키시오

eng_scores = [100, 40, 70, 90, 60]

eng_scores.sort(reverse=True)
print(eng_scores)

for i in range(-5,0, --1):
    print(eng_scores[i], "(", i,")",end = "")