// This program accepts an amount and convert it to change

#include <bits/stdc++.h>
#include <stdio.h>

using namespace std;

//This method accepts an integer argument in form of amount and converts it to change
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
}

// Driver function
int main()
{
    int amount;
    cout<<"Enter the amount for change"<<endl;//Request user for notes to convert to change
    cin>>amount;//Accept input from the user
    countCurrency(amount);//Pass parameters to countCurrency method
    return 0;
}
