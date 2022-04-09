class Person:
    def __init__(self, name, age, gender, sports, food):
        self.name=name
        self.age=age
        self.gender=gender
        self.sports=sports
        self.food=food
    def eat(self):
        print("eat "+self.food)
    def old(self):
        self.age += 1

Tom=Person('Tom', 23, 'male', 'tennis', 'steak')
Jerry=Person('Jerry', 25, 'female', 'swim', 'noodle')

Tom.eat()
Tom.old
