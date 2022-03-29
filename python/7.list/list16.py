#아래의 다양한 list comprehension 문제들을 코드로 구현 하시오
# [1] list comprehension괄호 를 사용하지 않고 list() 와 for 문으로 1~10 까지의 리스트 를 만들어보시오
# [2] 1~10까지의 수를 list comprehension 으로 각 숫자를 제곱한 값을 저장하는 리스트 를 만들어보시오
# [3]위 2 번 문제에서 5 의 제곱 값은 제외하고 출력 시키시오 . ★★★
# [4]if 조건문을 사용하여 1~50 까지의 수에서 짝수 , 홀수만 저장하는 리스트 를 각각 만들어보시오

print("[1]", list(range(1,11)))
print("[2]", [x**2 for x in range(1,11)])
print("[3]", [x**2 for x in range(1,11) if x == 25])