#학생들의 영어 점수를 오름차순으로 출력 하는 코드를 구현하시오
#내림차순 도 구현해본다

eng_scores = [100, 40, 70, 90, 60]

print(eng_scores)
eng_scores.sort()
print(eng_scores)

eng_scores.sort(reverse=True)
print(eng_scores)