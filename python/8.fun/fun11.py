class account:
    def withdraw(self, output_money):
        if(self.balance<output_money):
            print('ERROR: insufficient balance')
        else:
            self.balance-=output_money
    def deposit(self, input_money):
        self.balance += input_money
    def interest(self):
        pass
class B(account):
    def __init__(self):
        self.interest_rate = 1
        self.balance=0
    def interest(self):
        self.balance *= 1+self.interest_rate/100.0
class C(account):
    def __init__(self):
        self.interest_rate = 3
        self.balance=0
    def interest(self):
        self.balance *= 1+self.interest_rate/100.0
account1 = B()
account2 = C()
account3 = C()
