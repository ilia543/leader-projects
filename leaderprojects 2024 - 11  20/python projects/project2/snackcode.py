def pick():
    print("cocacola = 1  price = 1.80")
    print("snickers = 2  price = 2.50")
    print("lays chips = 3  price = 3")
    print("water = 4  price = 1")
    print("energy drink = 5  price = 2.20")
    print("nabeglavi = 6  price = 1.40")
    print("doritos = 7  price = 3")
    print("pringles = 8  price = 5")
    print("cheetos = 9  price = 1.50")
    print("haribo = 10  price = 3")
    print("MnM = 11  price = 2.85")
    print("creckers = 12 price 3.50")

    choise = float(input("enter product number: "))
    money = float(input("insert money: "))

    #კოკაკოლა
    if choise == 1 and money >= 1.80:
        print("gives cocacola can")
    elif choise == 1 and money < 1.80:
        print("not enough money")
        print("gives back change")

    #სნიკერსი
    if choise == 2 and money >= 2.50:
        print("drops snickers bar")
    elif choise == 2 and money < 2.50:
        print("not enough money")
        print("gives back change")

    #ლეისი
    if choise == 3 and money >= 3:
        print("drops lays chips")
    elif choise == 3 and money < 3:
        print("not enough money")
        print("gives back change")

    #წყალი
    if choise == 4 and money >= 1:
        print("gives water")
    elif choise == 4 and money < 1:
        print("not enough money")
        print("gives back change")

    #ენერგეტიკული
    if choise == 5 and money >= 2.20:
        print("gives energy drink")
    elif choise == 5 and money < 2.20:
        print("not enough money")
        print("gives back change")

    #ნაბეღლავი
    if choise == 6 and money >= 1.40:
        print("nabeglavi water")
    elif choise == 6 and money < 1.40:
        print("not enough money")
        print("gives back change")

    #დორიტოსი
    if choise == 7 and money >= 3:
        print("drops pack of doritos")
    elif choise == 7 and money < 3:
        print("not enough money")
        print("gives back change")

    #პრინგლსი
    if choise == 8 and money >= 5:
        print("drops pringles")
    elif choise == 8 and money < 5:
        print("not enough money")
        print("gives back change")

    #ჩიტოსი
    if choise == 9 and money >= 1.50:
        print("drops cheetos")
    elif choise == 9 and money < 1.50:
        print("not enough money")
        print("gives back change")

    #ჰარიბოს ჟელიბონი
    if choise == 10 and money >= 3:
        print("drops bag of haribos")
    elif choise == 10 and money < 3:
        print("not enough money")
        print("gives back change")

    #ემემდემსი
    if choise == 11 and money >= 2.85:
        print("drops MnM")
    elif choise == 11 and money < 2.85:
        print("not enough money")
        print("gives back change")
    
    #კრეკერები
    if choise == 12 and money >= 3.50:
        print("drops creckers")
    elif choise == 12 and money < 3.50:
        print("not enough money")
        print("gives back change")



pick()