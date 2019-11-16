//function for TheShopkeeperChangeChallenge
function calculate(){
	var getAmountBilled = document.getElementById("bill").value;
	var getAmountPaid = document.getElementById("pay").value;
	var getChange = getAmountPaid - getAmountBilled;

//echo the values of amount billed and paid to specified output ids
	document.getElementById("billed").innerHTML = "<h3>Amount Billed</h3>"+ getAmountBilled;
	document.getElementById("paid").innerHTML = "<h3>Amount Paid</h3>"+getAmountPaid;

	//calculate the change afte cutomer paid
	document.getElementById("actualChange").innerHTML = "<h3>Change</h3>"+getChange;

	function coinsNote(){
		var noteAndCoins = [1000, 500, 100, 50, 20, 10, 5, 1];
		//var coins = [20, 10, 5, 1];
		//document.getElementById("note").innerHTML = getChange%500;

		var NumNote = 0;
		var Reminder = getChange;
		var howMany = [];
		var coinNote = [];
		//lets find how many coins and notes
		for(i=0; i<noteAndCoins.length; i++){
			NumNote = Reminder / noteAndCoins[i];
			Reminder = Reminder % noteAndCoins[i]
			//save divisible times wothout fraction part
			coinNote[i] = ((i < 4) ? 'Note[s]' : 'Coin[s]');
			howMany[i] = ~~NumNote;
		}

		for(i=0; i<noteAndCoins.length; i++){
			if(howMany[i]>0){
				document.getElementById("desc").innerHTML += noteAndCoins[i]+"=>"+howMany[i]+" "+coinNote[i]+"<br>";
			}
		}

	}

	coinsNote();
}

var totalAmount = 0;

function checkedItem(itemAmount){
	var amount = itemAmount;
	totalAmount  += amount;
	document.getElementById("bill").value = totalAmount;
}
  			