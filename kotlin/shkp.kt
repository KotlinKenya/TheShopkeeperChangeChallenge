package aquarium

import java.util.*

//Shopkeeper challenge

fun main(args: Array<String>) {
    doSomeShopping()
}

//determineChange(421)

fun doSomeShopping() {

    val itemsOnShopping = listOf("Milk", "Honey", "Eggs", "Bread", "Spinach", "Towel", "Soda")
    val itemsOnShoppingPrices = listOf(44, 162, 357, 41, 42, 236, 65)
    val shopingMenu = listOf(1, 2, 3, 4, 5, 6, 7)
    val userShoppingList = mutableListOf<Int>()
    val userSelectionCost = mutableListOf<Int>()

    println("Items on this shop: ")
    println("1. Milk 44\n 2. Honey 162 \n 3. Eggs 357\n 4. Bread 41 \n 5. Spinach 42\n 6. Towel 236 \n 7. Soda 65\n")
    println("Please select an Item: (reply with Item no.)")
    val reader = Scanner(System.`in`)//for reading int specifically

    var flag = true
    while (flag) {

        var selected = reader.nextInt()

        if (selected in 1..7) {

            userShoppingList.add(selected - 1)// -1 because index starts at 0
            println("Please input the quantity of ${itemsOnShopping[selected - 1]} desired: ")
            val quantity = reader.nextInt()



            for (i in userShoppingList) {
                //stack the cost...
                userSelectionCost.add(quantity * itemsOnShoppingPrices[i])
            }

            val totalCost = userSelectionCost.sum()

            //once you have the cost, let the user know and query for payment
            println("Your total expenditure is $totalCost, please input the amount handed in to shopkeeper to check expected balances.")

            val amountReceived = reader.nextInt()
            if (amountReceived < totalCost) {
                println("Your amount cannot cover the cost")
                flag = false

            } else {
                val balance = amountReceived - totalCost
                println("$balance is your expected balance. See below for expected denominations")

                determineChange(balance)

                flag = false
                //End
            }
        } else {
            println("Please select a choice from 1-7, one at a time")
        }
    }

}





