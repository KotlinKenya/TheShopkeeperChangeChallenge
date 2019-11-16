const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const products = [
    { name: 'Milk', price: 44, id: 0 },
    { name: 'Honey', price: 162, id: 1 },
    { name: 'Eggs', price: 357, id: 2 },
    { name: 'Bread', price: 41, id: 3 },
    { name: 'Spinach', price: 42, id: 4 },
    { name: 'Towel', price: 236, id: 4 },
    { name: 'Soda', price: 65, id: 6 },
]
const main = () => {
    console.log('Available products\n');
    console.table(products);
    let sum = 0;
    readline.question('Enter products id separated by comma(,):', (ids) => {
        productsIds = ids.split(',').map((id) => parseInt(id));
        sum = productsIds.reduce((prev, next) => {
            if (products.length > (next)) {
                return prev + products[next].price
            }
            return prev
        })
        console.log("Your bill sum is ", sum);
        //readline.close()
        readline.question("Enter your payments :", (pay) => {
            let value = parseInt(pay);
            if (value >= sum) {
                console.log('Shopkeeper get ', sum );
                console.log('Your change is :')
                findCoins(parseInt(value - sum))
            }
    
            readline.close();
        })
    })
    


}

const findCoins = (v) => {
    const denominations = [{ v: 1, type: 'Coin' }, { v: 5, type: 'Coin' }, { v: 10, type: 'Coin' },
    { v: 20, type: 'Coin' }, { v: 50, type: 'Coin', type: 'Coin' }, { v: 100, type: 'Note' }, { v: 200, type: 'Note' }, { v: 500, type: 'Note' },
    { v: 1000, type: 'Note' }, { v: 2000, type: 'Note' }, { v: 5000, type: 'Note' }, { v: 10000, type: 'Note' }]
    let n = denominations.length;

    // Initialize Result 
    let ans = []

    //Traverse through all denomination 
    let i = n - 1
    while (i >= 0) {

        // Find denominations 
        while (v >= denominations[i].v) {
            v -= denominations[i].v
            ans.push(denominations[i])
        }

        // Prints to stdout with newline.
        i -= 1
    }
    // Print result 
    for (i in ans) {
        console.log(ans[i].v, ans[i].type)
    }
}
// entry point
main();
