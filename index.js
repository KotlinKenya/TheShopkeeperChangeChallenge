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
   const deno = [1, 5, 10, 20, 50, 100, 200, 500,  
        1000, 2000, 5000, 10000] 
let n = deno.length; 
  
// Initialize Result 
let ans = [] 

//Traverse through all denomination 
let i = n - 1
while(i >= 0){ 
      
    // Find denominations 
    while (v >= deno[i]) { 
        v -= deno[i] 
        ans.push(deno[i]) 
    }
    
   // Prints to stdout with newline.
    i -= 1
}
// Print result 
for (i in ans){
    console.log(ans[i]) 
}
}
// entry point
main();
