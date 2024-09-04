////////////////////////////////////////////////////////////////////
////////////////////////////// Array ///////////////////////////////
////////////////////////////////////////////////////////////////////

let nameArray =[ 'Rehan', 'hassan', 'Jahed', 'jihad' ]
//--------------------length ---------------------------------------
console.log(nameArray.length) 

//--------------------Index ----------------------------------------
console.log(nameArray[2]) 

//--------------------replace or update-----------------------------
nameArray[2] = 'Juita' 
console.log(nameArray)

//--------------------Push or Add Element in End of Array-----------
nameArray.push('Rajib')
console.log(nameArray)

//--------------------Pop or Remove element in End of array --------
nameArray.pop()
console.log(nameArray)

//--------------------Pop Element store in Another Variable --------
let restore = nameArray.pop()
console.log(nameArray)

//--------------------Shift:Remove the First element From array ----
nameArray.shift()
console.log(nameArray)

//--------------------Unshift:Add the Frist Element in Array--------
nameArray.unshift('Ridhi')
console.log(nameArray)

//--------------------Includes: Find Element From Array-------------

console.log('Find name is:', nameArray.includes('Juita'))

//Example with condition

if(nameArray.includes('Juita')){
    console.log('Congratulation! Find This Name in Array')
} else {
    console.log("Sorry ! i can not find this name in Array")
}

//---------------------isArray: Check Array-------------------------
let age = 18 //Not array
console.log('is this array:', Array.isArray(nameArray)) //This is a array
console.log('is this array:', Array.isArray(age)) //This is not Array

//---------------------Concat: Marge two array----------------------
let array1 = ['Rehan', 'Hassan']
let array2 = [1,2,3]
let marge = array1.concat(array2)
console.log(marge)

//---------------------Loop In Array--------------------------------
let fruit = ['Apple', 'Orange', 'Mango', 'FineApple']

//For Loop
for (let i = 0 ; i < fruit.length; i++){
    console.log(fruit[i]);
}

//For of Loop

let citys = ['Dhaka', 'Chittagon', 'Khulna']

for(let city of citys){
    console.log(city);
}


//---------------------Splice:Change Array(Add, Remove, Replace-----
// structure:

    // Splicee ( startIndexNumber, DeleteOrAddCount, newElement)

    let arrayForSplice = [1,2,3,4,5,6,7,8,9]

    //-----------------Add Element-----------------------------
    arrayForSplice.splice(2,0, 101)
    //(2,0,101) That means: Add Element in index number 3. That element is: 101

    //-----------------Delete Element--------------------------
    arrayForSplice.splice(3,4) 
    // (3,4) here 3 is IndexNumber and 4 indicate delete how many Elements.

    //-----------------Replace Element-------------------------
    arrayForSplice.splice(3,1, 10) 
    // (3,1,10) that means: Replace 1 element in index number 3, that element is: 10


    console.log(arrayForSplice) //For Output


//---------------------Reverse--------------------------------------
let numbers = [ 1,2,3,4,5]
    console.log('Normal Output:', numbers) //Print Normala
    numbers.reverse();
    console.log('Reverse Output:', numbers) //Print Reverse

    //Increment:
    let reverseIncrement = [];
    for (let i = 0; i < numbers.length; i++){
        let increment = numbers[i];
        reverseIncrement.unshift(numbers)
        
    }
    console.log('Increment Output: ', reverseIncrement)
    

    //Reverse Using For loop (Decrement):
    let decrementReverse = []

    for (let i = numbers.length-1; i >=0; i-- ){
        let decrement = numbers[i];
        // console.log('Decrement', numbers)
        decrementReverse.push(numbers)
    }
    console.log('Decrement Output:', decrementReverse);
    


//---------------------Sorting--------------------------------------
const number = [4,7,3,2,8,5,6,1]

//Ascending 
const ascendingNumbre = number.sort (function (a,b) {return a-b})
console.log( 'Ascending Number is:', ascendingNumbre);

//Desending

const descendingNumber = number.sort (function (a,b) {return b-a})
console.log('Descending Number is:' ,descendingNumber)
//---------------------.---------------------------------------------