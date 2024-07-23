#პროდუქტების მანქანა

def magazin(engredient1,engredient3,engredient2,engredient4,engredient5):
    print("chose what you want : " + engredient1 + " , " + engredient2 +  " , " + engredient3 +  " , " + engredient4 +  " , " + engredient5 )
    
    print(engredient1 + " cost 1.5 lari      1")
    print(engredient2 + " cost 2 lari        2")
    print(engredient3 + " cost 2 lari         3")
    print(engredient4 + " cost 3 lari       4")
    print(engredient5 + " cost 1.2 lari         5")
    
    chose1 = int(input("chose product 1 or 2 or 3 or 4 or 5 : "))
    chose2 = int(input("enter money : "))
    
    if chose1 == 1 and chose2 == 1.5 :
        print("here your " + engredient1)
    elif chose1 == 2 and chose2 == 2 :
        print("here your " + engredient2)
    elif chose1 == 3 and chose2 == 2 :
        print("here your " + engredient3)
    elif chose1 == 4 and chose2 == 3 :
        print("here your " + engredient4)
    elif chose1 == 5 and chose2 == 1.2 :
        print("here your " + engredient5)
    else :
        print("invaild information")


magazin("cocacola", "borjomi", "snickers", "hamburger", "coffe")