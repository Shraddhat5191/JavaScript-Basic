let c=require("readline-sync");
let loop_time=c.question("enter loop time: ");
var maxi=0;
let list=[ ]
for (let i=1;i<=loop_time;i++) {
let num=c.question("enter number: ")
list.push(num)
}
var maxi=list[0];
for (let j=0;j<list.length;j++) {
if (maxi<list[j]) {
[maxi=list[j]]
}
}
console.log(maxi)