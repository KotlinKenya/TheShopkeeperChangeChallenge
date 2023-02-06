import logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s.. %(message)s")

class ShopkeeperChangeChallenge():
    def __init__(self):
        self.denominations:list=[1000,500,100,50,20,10,5,1]

    def level_1(self,amount:int)->None:
        """The amount to be issued to the customer in terms currency in denominations in terms of Notes and coins that the customer should receive.

        >>> ShopkeeperChangeChallenge().level_1(352)
        3 100 note
        1 50 note
        2 1 coin
        """
        try:
            for i in range(len(self.denominations)):
                number:int = (amount//self.denominations[i])
                if number>0:
                    amount-=(self.denominations[i]*number)
                    denomination_type:str = "note" if self.denominations[i]>=50 else "coin"
                    print(f"{number} {self.denominations[i]} {denomination_type}")
        except Exception as error:
                logging.error(f"{error}")
    
    def level_2(self):
        print("S/N  Product  Price\n1.   Milk       44\n2.   Honey      162\n3.   Eggs       357\n4.   Bread      41\n5.   Spinach    42\n6.   Towel      236\n7.   Soda       65\n")
        # A dictionary of product(key) and price (value) found in the shop
        product_and_price:dict = {"Milk":44,"Honey":162,"Eggs":357,"Bread":41,"Spinach": 42,"Towel":236,"Soda":65}
        index_product:dict={1:"Milk",2:"Honey",3:"Eggs",4:"Bread", 5:"Spinach",6:"Towel",7:"Soda"}
        total_cost:int = 0 #total cost of what the customer shops
        shopping_cart:dict={} #customer shopping cart

        # customer adding items to cart.
        while True:
            try:
                index=int(input("Select product S/N: "))
                quantity= int(input("Enter quantity: "))
                shopping_cart[index_product[index]]=quantity
            except ValueError:
                break
    
        """
        Moving through customer cart to get items and quantity. 
        Then getting total cost per each item. adding up all costs to obtain accumulated cost stored as total_cost
        """
        try:
            for item in shopping_cart.keys():
                total_cost+=product_and_price[item]*shopping_cart[item]
            
            print(f"\nYour Total bill is {total_cost}")
            customer_cash = int(input("Enter amount to pay: "))
            change=customer_cash-total_cost
            if change>0:
                print(f"The Change is {change}\nDENOMINATION")
                self.level_1(change)
            else:
                print(f"No change\nAdd more cash worth {abs(change)}")

        except Exception as error:
            logging.error(f"{error}")
        

shop=ShopkeeperChangeChallenge()
# shop.level_1(653)
# shop.level_2()