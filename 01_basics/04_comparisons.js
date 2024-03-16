// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)


// console.log("2">1)
// console.log("02">1)

console.log(null >0);
console.log(null== 0);
console.log(null >=0);
/*
The reason for different output for the above code is that , the equality check(==) and comparisons(><>=)
work differently

Comparisons convert null to number , treating it as 0. thats why we have null>=0 as true and null>0 as false

 */

//=== is used for the strict check, as it checks the value and datatype 