// JS is dynamically typed language


//-> Primitive

/*
there are 7 categories
1. string
2. number
3. boolean
4. null
5. undefined
6. Symbol -> used to make the component unique
7. BigInt -> numbers bigger than number  "n" is added as suffix of number to make it bigint
*/

const score=100
const scoreValue = 100.3
const isLoggedIn =false
const temp= null;

let userEmail =""

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

// -> Reference type (Non-Primitive)
/*

1. Arrays
2. Objects
3. functions
*/

const heros = ["shaktiman","naagraj","doga","chota bheem"];
let details = {
    name: "Girish",
    age: 25
}

const myFunction = function(){
    console.log("This is myFunction and my typeof is called object-function");
}

// ======================================================================================================

// Stack and Heap Memory

/*
All the primitive types uses stack memory.
Non-primitive types uses heap memory.
*/

let myName ="Girish"

let anotherName = myName
anotherName ="Masali"

console.log(anotherName);
console.log(myName);


let userOne ={
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
