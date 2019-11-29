package com.company;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    //Declare an arrayList to store allthe denominations
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

        //Declare and initialize a scanner to listen for input from console
        Scanner scanner = new Scanner(System.in);

        //Prompt the customer to input a value
        System.out.println("Write Change");

        //Get the input from the console
        int change = scanner.nextInt();

        // Call a method to calculate the denominations and later display it to the console
        String response = sortAmount(change);

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
