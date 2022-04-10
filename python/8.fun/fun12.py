# 
class Account():
    def __init__(self, name, balance): # 고객의 정보를 받는 생성자를 구현하세요.
        self.name = name# 계좌 주인의 이름입니다.
        self.balance = float(balance)# 계좌의 잔액입니다.
    
    def accrue(self, ratio):
        # ratio는 이율입니다.
        self.balance = self.balance + (self.balance*(float(ratio)*0.01))
    def printmoney(self):
        # 계좌의 주인과 가진 돈을 print() 합니다.
        print(self.name, int(self.balance))

val = input()
#########

# 입력을 parsing하여 실제로 이자를 지급해 봅시다.
val_input = val.split(', ')
John = Account(val_input[0],val_input[1])
John.accrue(int(val_input[2]))
John.printmoney()
# printmoney를 사용해서 출력해주세요.
