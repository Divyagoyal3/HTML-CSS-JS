// js template literals or bacck tick sybrax or string template or template string

//Back tick syntax
const msg = "good day brother";
const msg2 = '"good evening"';

console.log(msg);
console.log(msg2);

//multi line strings
const msg3 = `
Welcome 
to my 
js`;
console.log(msg3);

// interpolation
const aag = 50;
const welcome = `this is your age ${aag}`;
//console.log(welcome);

//string length
const lastname = "john    ";
const result4 = lastname.length;
console.log(result4);

//string 1 question 170 video
function strlength(str) {
  return str.length;
}

//invoke a call
const result8 = strlength("  I m fond of exploring new things");

// solution 2
const isLongerthan = function (str, num) {
  if (str.length > num) {
    return true;
  } else {
    return false;
  }
};

const res4 = isLongerthan("hello", 3);

console.log(res);

//trim /touppercase/toLowerCase/indexof

//trim
const str = "Coding time  ";
console.log(str);
const res9 = str.trim();

console.log(res9);

//console.log(str.toLowerCase());
//console.log(str.toUpperCase());

const str4 = "going to start";
const ik = str4.indexOf("o");
console.log(ik);

// cretae a function to check if a string cnatins whitespace
// the function should take one argument, the string.
// the function should return true if the string contains whitespace, and false if it does not.

// solution
function containswhitespace(str1) {
  return str1.indexOf(" ") != -1;
}

const res0 = containswhitespace("john");
console.log(res0);

// split / join / reverse
const str7 = "you";
const rest = str7.split("");
console.log(rest);

//join()
// join in array

const convertstr = rest.join("/");
console.log(convertstr);

// reverse()
// reverse method reverse the element int the array

const food = ["pizza", "coffee", "love"];
const reversedArr = food.reverse();
console.log(reversedArr);

//--Reverse /Join Challenge
/* # : create a function to reverse a string
1. the function should take a string as an agrument
2. The function should return the string in rverse in reverse order.
*/

function reversestring(pass) {
  // convert string to array
  // let strArr = str.split();
  // //reverse the converted string
  // let reverse1 = strArr.reverse();

  // let reverse3 = reverse1.join("");
  // return reverse3;
  return pass.split("").reverse().join("");
}
const rev = reversestring("nodejs");
console.log(rev);

/* 1. create a function to separate a string using a any character .
2. The function should take teo arguments: the first argument is the array , and the second take two agrument is the character to  use as a sepaartor
*/

// solution

const separate = function (arr, char) {
  return arr.join(char);
};

const rel = separate(["js", "node-js", "invotech"], "-");
console.log(rel);
