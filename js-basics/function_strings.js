//wya to create a function

//1. function declaration
// 2.function expression

//create a function to say hllo

//function decalartion
function sayheloo() {
  //code here
  console.log("hlo welcome to function");
}

// function calling/invocation
sayheloo();

// function expression

let greeting = function () {
  console.log("Good Morning");
};
greeting();

//parameter and arguments
const addnum = function () {
  let x = 18;
  let y = 4;
  let reult = x + y;
  console.log(reult);
};
addnum();

const addnum1 = function (x, y) {
  let result = x + y;
  console.log(result);
};
addnum1(5, 6);

const mul1 = function (x, y) {
  let result = x * y;
  console.log(result);
};
mul1(5, 9);

// Return keyword
const addnum2 = function (x, y) {
  let result = x + y;
  return result;
};
let ans = addnum2(5, 6);
//alert(ans);

//ways of creating string
const myname = "Garima";

//using the constructor function
const firstname = new String("Garimrrfa");
console.log(myname, firstname);

// string concatenation

const str1 = "hlo";
const str2 = "How are you?";
const result1 = str1 + " " + str2;
console.log(result1);

const result3 = str1.concat(" " + str2);

console.log(result3);
