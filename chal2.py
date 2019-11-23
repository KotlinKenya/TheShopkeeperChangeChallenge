import sys
from chal1 import determineDenominations
def shop():
    items_backend = ["Milk", "Honey", "Eggs", "Bread", "Spinach", "Towel", "Soda"]
    items_backend_prices = [44, 162, 357, 41, 42, 236, 65]

    while True: # Continue shopping until the customer completes a transaction

        shoping_items ="\
        1. Milk 44,\n\
        2. Honey 162,\n\
        3. Eggs 357,\n\
        4. Bread 41,\n\
        5. Spinach 42,\n\
        6. Towel 236,\n\
        7. Soda 65,"

        print("Available Items to shop:\n\n")
        print(shoping_items)

        selected_item = int(input("Reply with no. beside item to select:"))
        if  selected_item > 0 and selected_item < 8:
            quantity_desired = int(input("Enter desired quantity of {} : \n".format(items_backend[selected_item-1])))
            if quantity_desired > 0 :
                amount_to_collect = quantity_desired*items_backend_prices[selected_item-1]
                
                handed_in_amount = int(input("Input the amount(provided to shopkeeper, you need to setle Ksh. {} bill ): ".format(amount_to_collect)))

                if handed_in_amount < amount_to_collect:
                    print("The provided amount is insufficient")

                else:
                    balance_to_return = handed_in_amount - amount_to_collect
                    print("This is your expected balance: \n")
                    determineDenominations(balance_to_return)
                    sys.exit("Thank You!")
        else:
            print("Your selection is invalid!, use 1 to 7")



if __name__ =="__main__":
    shop()

