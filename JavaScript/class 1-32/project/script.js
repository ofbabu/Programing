// console.log("Hello Omar Faruk Babu")
// alert("Hello Omar Faruk Babu")
// document.write("Hello Omar Faruk Babu")
1000
let userOneValue = prompt("User One Value");
let userTwoneValue = prompt("User two Value");

userOneValue = parseInt(userOneValue);
userTwoneValue = parseInt(userTwoneValue);

const mresult = userOneValue + userTwoneValue;
const smresult = userOneValue - userTwoneValue;
const mpresult = userOneValue * userTwoneValue;
const dresult = userOneValue / userTwoneValue;
const dsresult = userOneValue % userTwoneValue;

// console.log(userOneValue);
document.write(userOneValue + "<br>"); 
document.write(userTwoneValue + "<br>") ;
document.write("plus = " + mresult + "<br>");
document.write("meines = " + smresult + "<br>");
document.write("gun = " + mpresult + "<br>");
document.write("vag = " + dresult + "<br>");
document.write("vagses = " + dsresult + "<br>");