package com.gwazasoftwares;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    private static Scanner scanner;
    private static  int amountDue;

    private static  int numberOfNotes;
    private static  int notesRetuned;
    private String output;

    private static  int currentAmout;

    public static void main(String[] args) {
        scanner = new Scanner(System.in);
        System.out.println("Choose Question ");

        int question = scanner.nextInt();

        if(question == 2){
            String availableProducts =

                    "    1 Milk 44,\n" +
                    "    2 Honey 162,\n" +
                    "    3 Eggs 357,\n" +
                    "    4 Bread 41,\n" +
                    "    5 Spinach 42,\n" +
                    "    6 Towel 236,\n" +
                    "    7 Soda 65,";

            System.out.println(availableProducts);

            List<String> products = new ArrayList<>();
            int productNumber;

            String cont = "";

            do {

                System.out.println("choose product number");
                productNumber = scanner.nextInt();
                products.add(String.valueOf(productNumber));

                System.out.println("Do you want to continue shopping ? say yes");
                cont = scanner.next();

            }while(cont.equals("yes") || cont.equals("YES") );

            System.out.println("chosen products");
            for (String product : products) {
                System.out.println(product);
            }



        }else if(question == 1){

            System.out.println("Enter the  amount due");

            amountDue = scanner.nextInt();

            System.out.println(displayOutput(amountDue));
        }



    }

    private static String displayOutput(int amountDue) {

        currentAmout = amountDue;

      StringBuilder myMessage = new StringBuilder();

        if(currentAmout > 999){
            numberOfNotes = amountDue/1000;
            myMessage.append(" ");
            myMessage.append(getNotesReturned(numberOfNotes, "1000"));

            while(currentAmout >999){
                currentAmout -= 1000;

            }

        }

        if(currentAmout > 499){

            numberOfNotes = currentAmout/500;

            myMessage.append(" ");
            myMessage.append(getNotesReturned(numberOfNotes, "500"));


            while(currentAmout >499){
                currentAmout -= 500;

            }

                  }
        if(currentAmout > 99){

            numberOfNotes = currentAmout/100;

            myMessage.append(" ");
            myMessage.append(getNotesReturned(numberOfNotes, "100"));

            while(currentAmout >99){
                currentAmout -= 100;
            }

        }
        if(currentAmout > 49){

            numberOfNotes = currentAmout/50;

            myMessage.append(" ");
            myMessage.append(getNotesReturned(numberOfNotes, "50"));

            while(currentAmout >49){
                currentAmout -= 50;
            }

        }

        if(currentAmout > 0){
            numberOfNotes =currentAmout;

            getNotesReturned(numberOfNotes, "coins");
            myMessage.append(" ");
            myMessage.append(getNotesReturned(numberOfNotes, "coins"));

        }else{

        }

        return myMessage.toString();
}

    private static String getNotesReturned(int numberOfNotes, String noteType) {
        String myOutput = "";
        for(int i=0; i<=numberOfNotes; i++){
            notesRetuned += 1;
        }

        myOutput =   numberOfNotes + " " + noteType + " notes";
        return myOutput;
    }
}




