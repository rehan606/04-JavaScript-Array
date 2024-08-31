<h1 align="center" style="font-weight: bold;">💻JavaScript-Array💻</h1>

<h2 id="layout">🎨Description:</h2>

<p align="center">This repository is a comprehensive collection of JavaScript array methods, examples, and best practices.
</p>

<h2 id="technologies">💻 Technologies:</h2>

- JavaScript
- Node.js (optional, for running scripts in a server environment) 


<h2 id="technologies">💻 Code:</h2>

/********************
*******Array*********
*********************/ 


let number = [1,2,3,4,5,6,7,8,9];
console.log( "This is array", number);

// 01 Length of Array
let numberLen = [1,2,3,4,5,6,7,8,9,10];
console.log("lenght of Array = ", numberLen.length);

// 02 Index of Array
let numberInd = [1,2,3,4,5,6,7,8,9,10];
console.log("index of Array = ", numberInd[5]);

// 03 Push or Add in Array

let numberPush = [1,2,3,4,5,6,7,8,9,10];
numberPush.push(11);
console.log("Push Or Adding Number is =", numberPush );

// 04 Pop Or Remove Element From Array

let namePop = ['Rehan', 'hassan', 'Jahid'];
namePop.pop();
console.log("Pop or remove element is:", namePop)

// 04-1 Removing element store in another variable

let removeElement = namePop.pop();
console.log("Removieng Element is:", namePop) 

// 05 Shift :: Remove First Element From Array
let nameShift = ['Rehan', 'hassan', 'Jahid'];
nameShift.shift();
console.log("Remove first element of Array", nameShift);

// 06 UN Shift / insert in Array/

let nameUnShift = ['Rehan', 'hassan', 'Jahid'];
nameUnShift.unshift('Rabina');
console.log("UnShift or insert Element is:", nameUnShift)

// 07 Include or Find Element From Array

let nameInclude = ['Rehan', 'hassan', 'Jahid'];
console.log("include or Find ELement is:", nameInclude.includes('Rehan')); //True
console.log("include or Find ELement is:", nameInclude.includes('Rabi')); //false

// 07-1 Conditional Example Using Include
if (nameInclude.includes('Rehan')){
    console.log("Congratulations! Find The Name in this Array");
} else {
    console.log("Sorry i can't Find the name in This Array");
}

// 08 isArray : Check the Variable Type

let numArray = [ 1,2,3]; // This is Array.
let text = "Rehan"; // This is not Array, it's a only string.
let age = 25; // This is not Array, it's a only Integer.

console.log(Array.isArray(numArray)); //True
console.log(Array.isArray(text)); //False
console.log(Array.isArray(age)); //False


// 09 Concat or Marge Array

let array1 = ['Rehan', 'Rabina', 'Jahid'];
let array2 = ['Hassan', 'Joya', 'Jihad'];

console.log( "Concat Two Array", array1.concat(array2));


