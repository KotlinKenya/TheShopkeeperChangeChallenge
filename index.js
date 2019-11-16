const readline =  require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const main = () => {
        readline.question(`Enter change:`, (change) => {
            console.log(change)
            findCoins(parseInt(change))
            readline.close()
          })
    
}

const findCoins = (v) => {
   const denominations = [ {v:1,type:'Coin'}, {v:5,type:'Coin'}, {v:10,type:'Coin'},
    {v:20,type:'Coin'}, {v:50,type:'Coin',type:'Coin'}, {v:100,type:'Coin'}, {v:200,type:'Coin'}, {v:500,type:'Coin'},  
   {v:1000,type:'Note'}, {v:2000,type:'Note'}, {v:5000,type:'Note'}, {v:10000,type:'Note'}] 
let n = denominations.length; 
  
// Initialize Result 
let ans = [] 

//Traverse through all denomination 
let i = n - 1
while(i >= 0){ 
      
    // Find denominations 
    while (v >= denominations[i].v) { 
        v -= denominations[i].v 
        ans.push(denominations[i]) 
    }
    
   // Prints to stdout with newline.
    i -= 1
}
// Print result 
for (i in ans){
    console.log(ans[i].v,ans[i].type) 
}
}
// entry point
main();
