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
    

        

# shop=Shopkeeper()
# shop.level_1(653)
# shop.level_2({"Milk":2,"Honey":5})