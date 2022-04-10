# 
class Account():
    def __init__(self, name, amount): # 고객의 정보를 받는 생성자를 구현하세요.
        self.name = name# 계좌 주인의 이름입니다.
        self.amount = int(amount)# 계좌의 잔고입니다.
    
    def remit(self, receiver_account, amount_money):
        # receiver_account는 Account 객체입니다.
        # amount_money은 int형의 숫자입니다.
        if (self.amount >= int(amount_money)):
            self.amount -= int(amount_money)
            receiver_account.amount += int(amount_money)
            print(receiver_account.amount)
        else:
            lack = int(amount_money) - self.amount
            print("불가능,",lack, end="")
            print("원")
            
    
    def printmoney(self):
        print(self.name, int(self.balance))
        # 가진 돈을 print()하고, 현재 self.amount를 return합니다.
    
#########

val = input()
val_input = val.split(',')
acc1 = Account(val_input[0], val_input[1])
acc2 = Account(val_input[2], val_input[3])

acc1.remit(acc2, val_input[4])
