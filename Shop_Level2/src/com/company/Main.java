package com.company;

import java.util.*;

public class Main {

    //Declare an arrayList to store all the denominations
    private static ArrayList<Integer> denominations;

    public static void main(String[] args) {

        //Initialize the arrayList and add all the required denominations
        denominations = new ArrayList<>();
        denominations.add(1000);
        denominations.add(500);
        denominations.add(100);
        denominations.add(50);
        denominations.add(20);
        denominations.add(5);
        denominations.add(1);



        //Initialize the hashmap and add all the available products
        HashMap<String, Integer> availableProducts = new HashMap<>();
        availableProducts.put("milk",44);
        availableProducts.put("honey",162);
        availableProducts.put("eggs",537);
        availableProducts.put("bread",42);
        availableProducts.put("spinach",42);
        availableProducts.put("towel",236);
        availableProducts.put("soda",65);


        //Declare and initialize a scanner to listen for input from console
        Scanner scanner = new Scanner(System.in);


        int itemPosition = 0;

        //List all the items available for purchase
        for (String key : availableProducts.keySet())
        {
            itemPosition++;
            availableProducts.get(key);
            System.out.println(itemPosition + "  "+ key + "--------------------"+ availableProducts.get(key));

        }

        //Prompt the customer to make a purchase
        System.out.println("Select the items that you wish to buy and separate them with a comma");

        //Get the input from the console
        String change = scanner.next().trim();


        //Separate the items by comma
        List<String> allProducts = Arrays.asList(change.split(","));

        //Declare and intialize totalCost
        int totalCost = 0;


        for (String oneProduct : allProducts) {

            //Convert product to lowercase and trim it.
            oneProduct = oneProduct.toLowerCase().trim();


            //Loop through all the products
            if (availableProducts.containsKey(oneProduct)) {
                int purchasePrice = availableProducts.get(oneProduct);
                totalCost += purchasePrice;
            }else {
                System.out.println("You provided a non-existing product");
                return;
            }
        }



        System.out.println("Total cost of your items "+ totalCost);
        System.out.println("Pay ");
        int paid = scanner.nextInt();
        int changeAmt = paid - totalCost;


        // Call a method to calculate the denominations and later display it to the console
        String response = sortAmount(changeAmt);


        System.out.println("Your total change is "+ changeAmt);

        System.out.println(response);

    }

    private static String sortAmount(int amount){

        //Declare and initialize a variable change that contains the value of changing amount
        int change = amount;
        StringBuilder changeString = null;
        String label;

        // Create a for each loop to sort the change
        for (Integer denomination : denominations) {
            int count = change / denomination;
            change = change - (count * denomination);


            //Assign different label to coins and notes
            label = denomination < 100 ? "coins" : "notes";


            //Add the final result into a single string
            if (count > 0) if (changeString == null) {
                changeString = new StringBuilder(count + " " + denomination + "-" + label);
            } else {
                changeString.append(" ").append(count).append(" ").append(denomination).append("-").append(label);
            }
        }

        assert changeString != null;
        return changeString.toString();
    }
}
