//function for TheShopkeeperChangeChallenge
function calculate(){
	//capture the iput values and find the difference
	var getAmountBilled = document.getElementById("bill").value;
	var getAmountPaid = document.getElementById("pay").value;
	var getChange = getAmountPaid - getAmountBilled;

	//echo the values of amount billed and paid to specified output ids
	document.getElementById("billed").innerHTML = "<h3>Amount Billed</h3>"+ getAmountBilled;
	document.getElementById("paid").innerHTML = "<h3>Amount Paid</h3>"+getAmountPaid;

	//calculate the change afte cutomer paid
	document.getElementById("actualChange").innerHTML = "<h3>Change</h3>"+getChange;

	//coins and notes function
	function coinsNote(){
		//coins and notes value arrays
		var noteAndCoins = [1000, 500, 100, 50, 20, 10, 5, 1];

		var NumNote = 0;            //init default ans for result before devision calculation
		var Reminder = getChange;
		var howMany = [];           //init default array for exactly number of note/coin
		var coinNote = [];          //init default array for indicating a note/coin
		//lets find how many coins and notes
		for(i=0; i<noteAndCoins.length; i++){
			NumNote = Reminder / noteAndCoins[i];
			Reminder = Reminder % noteAndCoins[i]
			//save divisible times wothout fraction part
			coinNote[i] = ((i < 4) ? 'Note[s]' : 'Coin[s]');
			howMany[i] = ~~NumNote;
		}
		//display only coins and notes which are divisible and will sum the change
		document.getElementById("desc").innerHTML = "";
		for(i=0; i<noteAndCoins.length; i++){
			if(howMany[i]>0){
				document.getElementById("desc").innerHTML += noteAndCoins[i]+"=>"+howMany[i]+" "+coinNote[i]+"<br>";
			}
		}

	}

	coinsNote();
}

var totalAmount = 0;
//incement the selected items
function checkedItem(checkbox,itemAmount){
	var amount = itemAmount;
		//check if item is selected or unselected and encrement or decrement respectively
		if(checkbox.checked == true){totalAmount += amount;}else{totalAmount -= amount;}
	//echo bill amount on bill input form
	document.getElementById("bill").value = totalAmount;
}
  			