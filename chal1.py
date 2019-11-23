def determineDenominations(amount):
    possible_combinations = []
    # Denominations available
    denominations_available = [1000, 500, 100, 50, 20, 10, 5, 1]
    # stack to keep track of usable denomination
    denomination_counter =  [0, 0, 0, 0, 0, 0, 0, 0]
    # attach them using zip, denom * count = total 
    for i, j in zip(denominations_available, denomination_counter):
        if amount >= 1:
            j = amount // i # // divides the first operand by the second
            # using the amount and denomination counter
            amount = amount - j * i

            if j is not 0: # only stack if its not 0, else drop

                if denominations_available.index(i) > 4: # index of 4+ is a coin, else a note

                    possible_combinations.append("{count}  {amount} Coins(s)".format(count = j, amount = i))
                else:
                    possible_combinations.append("{count} {amount} Notes(s)".format(count = j, amount = i))
    for i in possible_combinations:
        # Dispense the combination when its prepares
        print(i)  

if __name__ == "__main__":
    # to avoid execution, bootstrap it here 
    amount_to_dispense_balance = int(input("Enter amount to dispense change dinominations: "))
    determineDenominations(amount_to_dispense_balance)