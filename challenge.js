
//Coded by: Karim K. Kanji
// Written using JS to run on node
// To run type: node challenge.js to run

//import readline from node libraries
const readline = require('readline');
//create a custom interface 
const readercustom = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

//create notes and coin variables
let note_1000 = 0;
let note_500 = 0;
let note_200 = 0;
let note_100 = 0;
let note_50 = 0;
let note_20 = 0;
let note_10 = 0;
let note_5 = 0 ;
let note_1 = 0;

//The sort method for the sorting
let sort = (change) =>{
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

// call the readercustom interface to handle the input and pass the
// value received to our sort function
readercustom.question('What do you want to sort? ',(answer)=>{
    sort(answer);
    readercustom.close();
});

//Tada! Hope I win.... Fingers crossed