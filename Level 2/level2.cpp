#include <iostream>

using namespace std;

void countCurrency(int amount){//Method declaration
    int notes[9] = { 1000, 500, 200, 100, 50, 20, 10, 5, 1 };//Create array with all denominations
    int noteCounter[9] = { 0 };//Create and initialize array to hold number of items per denomination

    // count notes using Greedy approach
    for (int i = 0; i < 9; i++) {
        if (amount >= notes[i]) {
            noteCounter[i] = amount / notes[i];
            amount = amount - noteCounter[i] * notes[i];
        }
    }


    // Output the notes required
    cout << "\nReturn these denominations to the client: ";
    for (int i = 0; i < 9; i++) {//Output individual dimensions using an iterative approach
        if (noteCounter[i] != 0) {
            cout<<noteCounter[i]<<" "<<notes[i]<<" ";
            if (notes[i] >= 50){
                if (noteCounter[i]>1){
                    cout<<"notes ";//Output if notes are many
                }
                else{
                    cout<<"note ";//Output if only one note
                }
            }
            else{
                if (noteCounter[i]>1){
                    cout<<"coins ";//Output is coins are many
                }
                else{
                    cout<<"coin ";//Output if only one coin
                }
            }
        }
    }
    cout<<"\n";
}

void calculateTotalCost(string items[7], int itemPrices[7], int selectedItemsNumber[7]){
    int totalPrice = 0;//Initialize totalPrice variable
    int amountPaid;//Create variable to store amount paid by the customer
    for (int i = 0; i <7; i++){//Output the items bought and their total individual cost
        if (selectedItemsNumber[i]>0){
            cout<<items[i]<<" - "<<itemPrices[i] * selectedItemsNumber[i]<<endl;
            totalPrice += itemPrices[i] * selectedItemsNumber[i];
        }
    }
    cout<<"Total price : "<<totalPrice<<endl;//Output total price of items bought

    cout<<"Enter the amount paid by customer"<<endl;//Request for amount paid by customer
    cin>>amountPaid;//Accept amount paid by customer from user
    cout<<"\nThe total change to be returned to the customer is: "<<amountPaid-totalPrice<<endl;
    countCurrency(amountPaid-totalPrice);//Call countCurrency method to calculate change required
}

int main()
{
    int terminateCode = 0;
    string items[7] = {"Milk", "Honey", "Eggs", "Bread", "Spinach", "Towel", "Soda"};//Create array with items for sale
    int itemPrices[7] = {44, 162, 357, 41, 42, 236, 65};//Create array with corresponding item prices
    int selectedItemsNumber[7] = {0, 0, 0, 0, 0, 0, 0};//Array to save number of items selected
    while (terminateCode == 0){
        int input;
        cout<<"The items available are"<<endl;//Request input from user
        for (int i = 0; i <7; i++){//Output the items available and their prices
            cout<<i+1<<" "<<items[i]<<" - "<<itemPrices[i]<<endl;
        }
        cout<<"Enter the number of the item you want to purchase"<<endl;//Ask user for item selection
        cin>>input;//Accept item selection from customer
        if (input>0 && input <=7){//Accept valid item selections from user
            selectedItemsNumber[input-1] = selectedItemsNumber[input-1] + 1;//Add quantity for each selected item
            cout<<"Do you need another item? Reply with Y or N"<<endl;//Ask user if they need to continue shopping
            char shoppingDecision;//Create variable for customer decision
            cin>>shoppingDecision;//Accept customer decision from keyboard
            if (shoppingDecision == 'N' || shoppingDecision == 'n'){//check if decision is NO
                terminateCode = 1;
                calculateTotalCost(items, itemPrices, selectedItemsNumber);//Call checkout method
            }
            else if (shoppingDecision == 'Y' || shoppingDecision == 'y'){//Checkif decision is YES
                terminateCode = 0;//Set terminate code to prevent program from exiting
            }
            else {//Reject all other decision inputs
                cout<<"That selection is not recognized by the system. System will now go to checkout"<<endl;
                terminateCode = 1;
                calculateTotalCost(items, itemPrices, selectedItemsNumber);//Call checkout method
            }
        }
        else {
            cout<<"Please enter a valid selection"<<endl;//Display error message
            terminateCode = 0;//Loop again to give user another chance to select a valid input
        }

    }
    return 0;
}
