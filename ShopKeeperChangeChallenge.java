package algorithms;

import java.util.Scanner;

public class ShopKeeperChangeChallenge {

    public static void main(String[] args) {
        // write your code here
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the Balance...");
        int Balance = input.nextInt();
        int thousandNotes = 0, RemNotes = 0, five_hundredNotes = 0,
                two_hundredNotes = 0, hundredNote = 0, fifty = 0,
                TwentyCoins = 0, tenCoins = 0, fiveCoins = 0, shillings = 0;

        thousandNotes = Balance / 1000;
        RemNotes = Balance % 1000;

        five_hundredNotes = RemNotes / 500;
        RemNotes = RemNotes % 500;

        two_hundredNotes = RemNotes / 200;
        RemNotes = RemNotes % 200;

        hundredNote = RemNotes / 100;
        RemNotes = RemNotes % 100;

        fifty = RemNotes / 50;
        RemNotes = RemNotes % 50;

        TwentyCoins = RemNotes / 20;
        RemNotes = RemNotes % 20;

        tenCoins = RemNotes / 10;
        RemNotes = RemNotes % 10;

        fiveCoins = RemNotes / 5;
        shillings = RemNotes % 5;

        System.out.println("The Change : \n" + thousandNotes + "  One Thousand Notes \n" +
                five_hundredNotes + "  Five Hundred Notes \n" + two_hundredNotes +
                "  Two Hundred Notes \n" + hundredNote + "  One Hundred Notes \n" + fifty +
                "  Fifty Notes \n" + TwentyCoins + "  Twenty Coins" + tenCoins + "  Ten Coins \n" +
                fiveCoins + "  Five Coins\n" + shillings + "  Shillings \n");

    }

}
