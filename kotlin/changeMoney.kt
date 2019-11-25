package aquarium

import java.util.*

fun main(args: Array<String>) {
    val reader = Scanner(System.`in`)

    println("Please input the amount you'd like to have changed:")
    val userMoney = reader.nextInt()

    determineChange(userMoney)
}

fun determineChange(amount: Int) {
    //amount is immutable, re-assign to something you can play around with
    var amountReceived = amount
    val denominationsAvailable = listOf(1000, 500, 100, 50, 20, 10, 5, 1)
    val denominationsCounter = mutableListOf(0, 0, 0, 0, 0, 0, 0, 0)

    val denominationsStore = mutableListOf<String>()

    //Bind the denominations and usage counter
    (denominationsAvailable zip denominationsCounter).forEach {
        //Since the <it> is immutable, it's better to save it somewhere else
        val denomination = it.first
        var countedDenomination = it.second
        if (amountReceived >= 1) {
            //while the amount is reasonable, do the splitting
            countedDenomination =
                amountReceived / denomination// remember to ignore decimals, only take the resulting int
            amountReceived -= denomination * countedDenomination
        }

        if (countedDenomination != 0) {//only save if it's used, else drop it

            if (denomination <= 20) {//Some grammar
                denominationsStore.add("$countedDenomination  $denomination Coin(s)")
            } else {
                denominationsStore.add("$countedDenomination  $denomination Note(s)")
            }
        }


    }

    denominationsStore.forEach {
        println(it)
    }
}