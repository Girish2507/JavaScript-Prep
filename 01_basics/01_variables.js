const accountId = 144553
let accountEmail ="girish@xyz.com"
var accountPassword = "12345"
accountCity = "Pune" // never use this way of declaring as this is not a good practise
let accountState

// accountId=2 // Not allowed to change the const type of variable

accountEmail ="masali@xyz.com"
accountPassword = "23456"
accountCity ="Mumbai"


console.log(accountId);
/*
Prefer not to use Var because of the issue in the block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])