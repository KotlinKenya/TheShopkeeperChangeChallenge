
//Coded by: Karim K. Kanji
// Written using JS to run on node
// To run type: node challenge2k.js to run

//import readline from node libraries
const readline = require('readline');
//create a custom interface 
const readercustom = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

//create notes and coin variables
let note_1000,note_500,note_200,note_100,note_50,note_20,note_10,note_5 ,note_1 = 0;

//Define the variables for handling the amounts
let Milk = 44, Honey = 162, Eggs = 357, Bread = 41, Spinach = 42, Towel = 236, Soda = 65;

var cart = 0;

//The sort method for the sorting
let sort = (change) =>{
    readercustom.close();
    console.log("Your change is as follows\n");

    //sort for 1000
    if(Math.floor(change/1000)>0){
        note_1000=Math.floor(change/1000);
        change=change-(note_1000*1000);
    }
    else{
        note_1000=Math.floor(change/1000);
    }
    console.log("Ksh. 1000 notes: "+note_1000);

    //sort for 500
    if(Math.floor(change/500)>0){
        note_500=Math.floor(change/500);
        change=change-(note_500*500);
    }
    else{
        note_500=Math.floor(change/500);
    }
    console.log("Ksh. 500 notes: "+note_500);

    //sort for 100
    if(Math.floor(change/100)>0){
        note_100=Math.floor(change/100);
        change=change-(note_100*100);
    }
    else{
        note_100=Math.floor(change/100);
    }
    console.log("Ksh. 100 notes: "+note_100);

    //sort for 50
    if(Math.floor(change/50)>0){
        note_50=Math.floor(change/50);
        change=change-(note_50*50);
    }
    else{
        note_50=Math.floor(change/50);
    }
    console.log("Ksh. 50 notes: "+note_50);

    //sort for 20
    if(Math.floor(change/20)>0){
        note_20=Math.floor(change/20);
        change=change-(note_20*20);
    }
    else{
        note_20=Math.floor(change/20);
    }
    console.log("Ksh. 20 coins: "+note_20);

    //sort for 10
    if(Math.floor(change/10)>0){
        note_10=Math.floor(change/10);
        change=change-(note_10*10);
    }
    else{
        note_10=Math.floor(change/10);
    }
    console.log("Ksh. 10 coins: "+note_10);

    //sort for 5
    if(Math.floor(change/5)>0){
        note_5=Math.floor(change/5);
        change=change-(note_5*5);
    }
    else{
        note_5=Math.floor(change/5);
    }
    console.log("Ksh. 5 coins: "+note_5);

    //sort for 1
    if(Math.floor(change/1)>0){
        note_1=Math.floor(change/1);
        change=change-(note_1*1);
    }
    else{
        note_1=Math.floor(change/1);
    }
    console.log("Ksh. 1 coins: "+note_1+"\n");
}
//Handling the adding of items to cart
let addtocart = (answercus)=>{
    switch(answercus.toLowerCase()){
        case "milk":
        case '1':
            cart = cart+Milk; break;
        case "honey":
        case '2':
                cart = cart+Honey; break;
        case "eggs":
        case '3':
                cart = cart+Eggs; break;
        case "bread": 
        case'4':
                cart = cart+Bread; break;
        case "spinach":
        case '5':
                cart = cart+Spinach; break;
        case "towel":
        case '6':
                cart = cart+Towel; break;
        case "soda":
        case '7':
                cart = cart+Soda; break;
        case "end":
        case '99':
            //When done terminate recursion.
            pay(); break;
        default: 
        //Incase no choice is chosen tell user and recurse
        console.log("Sorry, we couldn't understand that. Please try again.");
    }
    console.log("Your current cart amount is: "+cart);
    buy();
}

//handle the buying
let buy = () =>{
readercustom.question('What do you want to buy? (Choose a number or type the name) ',(answer)=>{
    addtocart(answer);
});
}
//handle the payments
let pay = ()=>{
    //close the input interface first
    console.log("Your amount to pay is: "+cart);
    readercustom.question("\n\nWhat amount do you have? " , (answer)=>{
    if(parseInt(answer)<cart){
        console.log("The amount is not sufficient.. Please try again");
        pay();
        }
    else if(parseInt(answer)!=NaN){
        console.log("The amount you entered is not valid. Please try again");
        pay();
    }
    else{
    console.log('The shopkeeper should give you the following as change:');
    sort((answer-cart));
    }
    
});
}

//Print the price list
console.log('Kindly choose the items you want to buy: \n'+
'* 1. Milk 44\n'+
'* 2. Honey 162\n'+
'* 3. Eggs 357\n'+
'* 4. Bread 41\n'+
'* 5. Spinach 42\n'+
'* 6. Towel 236\n'+
'* 7. Soda 65\n\n'+
'When done type: 99 or end\n');

buy();

//Tada! Hope I win.... Fingers crossed