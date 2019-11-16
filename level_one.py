#level one
#greedy algorithm

def findMin(V):
    # Tanzanian Currency
    deno = [10, 20, 50, 100, 200, 500,
            1000,2000,5000,10000]
    count_of_tanzania_currencies = len(deno)

    # Initialize Result
    ans = []

    # Traverse through all denomination
    i = count_of_tanzania_currencies - 1
    while i >= 0:

        # Find denominations
        while V >= deno[i]:
            V -= deno[i]
            ans.append(deno[i])

        i -= 1

    # Print result
    for i in range(len(ans)):
        if ans[i] == 1000 or ans[i] ==  2000 or ans[i] == 5000 or ans[i] == 10000:
            print(str(ans[i])+ " Note \t", end=" ")
        else:
            print(str(ans[i])+" Coin \t", end=" ")




if __name__ == '__main__':
    n = 130
    print("Change is ",
          "of change for", n, ": ", end="")




    findMin(n)


