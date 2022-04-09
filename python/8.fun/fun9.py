class Dog:
#Dog class 구현 ...
    def __init__(self, name_input, age_input, gender_input, owner_input):
        self.name=name_input
        self.age=age_input
        self.gender=gender_input
        self.owner=owner_input
        
    def get_older(self):
        self.age+=1
        
    def set_owner(self, owner_input):
        self.owner=owner_input

    def print_dog(self):
        print(self.name)
        print(self.age)
        print(self.gender)
        print(self.owner)

dog_instance = Dog('Puggy', 5, 'M', 'Tom')
dog_instance.print_dog()
dog_instance.get_older()
dog_instance.get_older()
dog_instance.print_dog()

dog_instance.set_owner('James')
dog_instance.print_dog()
