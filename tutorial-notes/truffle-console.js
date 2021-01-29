/* 
There are MANY ways to interact with your contracts, we will be using web3 inside truffle console. For beginners, I find just playing around with the web3 functions and comparing to know what works and what doesn't. For this, we will use 'truffle console' to explain a few of them.

**NOTE** 
Launch truffle console with network contracts were deployed to
$ truffle console --network sokol

**NOTE**
'const accounts' has already been declared by truffle console
$ const accounts = await web3.eth.getAccounts()


'deployed()' is a truffle function that stores deployed  
contract's data needed to interact with contract. Using artifacts from deployed contracts, all contract functions are accessible via web3.
*/
const hgc = await HashGuideCoin.deployed()
hgc.name()
hgc.symbol()
hgc.decimals().then(a => a.toString())
/*
Ethereum Virtual Machine uses the BigNumber library to handle its numbers. We need to assign the 'balanceOf()' function to a variable using a promise in order to retrieve the output needed. 
The BigNumber output needs to be converted 'toString()' and then we use 'web3.utils.fromWei()' to output the whole number without decimals.

This could be performed in one command using then() function but I find this easier to understand for beginners.
*/

// Retrieve HashGuideCoin balance of account[0] 
const bal0 = await hgc.balanceOf(accounts[0])
const balance0 = await web3.utils.fromWei(bal0.toString())
// Above methods can be done in a single command. See Below.
hgc.balanceOf(accounts[0]).then(a => a.toString()).then(a => web3.utils.fromWei(a))

// Send 5000 HGC to account[1]
var txamount = await web3.utils.toWei("5000")
hgc.transfer(accounts[1], txamount)
// Check balance of account number 2 (accounts[1])
hgc.balanceOf(accounts[0]).then(a => a.toString()).then(a => web3.utils.fromWei(a))
