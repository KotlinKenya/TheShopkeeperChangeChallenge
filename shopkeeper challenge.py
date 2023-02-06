import logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s.. %(message)s")

class Shopkeeper():
    def __init__(self):
        self.denominations:list=[1000,500,100,50,20,10,5,1]

    def level_1(self,amount:int)->None:
        """The amount to be issued to the customer in terms currency in denominations in terms of Notes and coins that the customer should receive.

        >>> Shopkeeper().level_1(352)
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
    
    def level_2(self,shopping_cart:dict):
        """
        >>> Shopkeeper().level_2({"Milk":2,"Honey":1})
        Your Total bill is 250
        Enter amount to pay: 255
        The Change is 5
        DENOMINATION

        1 5 coin

        """
        # A dictionary of product(key) and price (value) found in the shop
        product_and_price:dict = {"Milk":44,"Honey":162,"Eggs":357,"Sread":41, "Spinach": 42,"Towel":236,"Soda":65}
        total_cost:int = 0 #total cost of what the customer shops
        """
        Moving through customer cart to get items and quantity. 
        Then getting total cost per each item. adding up all costs to obtain accumulated cost stored as total_cost
        """
        try:
            for item in shopping_cart.keys():
                total_cost+=product_and_price[item]*shopping_cart[item]
            
            print(f"Your Total bill is {total_cost}")
            customer_cash = int(input("Enter amount to pay: "))
            change=customer_cash-total_cost
            if change>0:
                print(f"The Change is {change}\nDENOMINATION")
                self.level_1(change)
                return
            print(f"No change\nAdd more cash worth {abs(change)}")

        except Exception as error:
            logging.error(f"{error}")
        

# shop=Shopkeeper()
# shop.level_1(653)
# shop.level_2({"Milk":2,"Honey":5})