def solution(s):
    answer = []
    answer = s.split(' ')
    b = ''   
    for i in range(0,len(answer)) :
        a = []
        a = answer[i]
        a = list(map(str,a))
        for j in range(0,len(a)) :
            if j % 2 == 0 :
                #b += a[j].upper
                print(a[j].upper)
            elif j % 2 != 0:
                #b += a[j].lower
    return answer