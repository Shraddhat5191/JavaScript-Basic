// var number = 15;
// let readlineaSync=require("readline-sync");
// var number=readlineaSync.questionInt("enter the input")
// if(number%3 === 0){
// console.log("choco")
// }
// if(number % 7===0){
//     console.log("late")
// }
// if(number%3===0 && number%7===0) {
//     console.log("Chocolate")
// }
// else {
//     console.log("Not divisible by 3 , 7")
// }

let readlineaSync=require("readline-sync");
var number=readlineaSync.questionInt("enter the input");
if(number%3===0 && number%7===0) {
    console.log("Chocolate")
}if(number % 7===0){
    console.log("late")
}
if(number%3 === 0){
console.log("choco")
}
else {
    console.log("Not divisible by 3 , 7")
}

















// n=int(input("enter the number"))
// i=1
// while i<=100:
//     if i%3==0:
//         print("nav")
//     if i%7==0:
//         print("gurukul")
//     if i%3==0 and i%7==0:
//         print("navgurukul")
//     else:
//         print(i)
//     i=i+1 