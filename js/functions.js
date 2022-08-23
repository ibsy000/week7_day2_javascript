console.log('Hello this is the functions file.');

/*
    JavaScript Function
*/

// Regularly Named Function
// function <funcName>(){code to execute when called}

function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2;
};

// Execute a function: funName()
console.log(addNums())


// Regularly Name Function with Parameters
// function <funcName>(param1, param2, etc){code to execute when called}
function addNums2(num1, num2){
    return num1 + num2;
};
// Execute a function: funcName(arg1, arg2, etc.)
console.log(addNums2(25,75));


// Take Exercise 1 from last night and put it in a Function

// for (i = 0; i < exerciseOneArr.length; i++){
//     if (exerciseOneArr[i]+1 != exerciseOneArr[i+1]){
//         console.log(exerciseOneArr[i])
//         break
//     }
// }


function consecutive(arr){
    for (i = 0; i < arr.length; i++){
        if (arr[i] + 1 != arr[i+1]){
            return i + 1
        }
    }
}

console.log(consecutive([1, 2, 3, 5, 6, 7]))



// Function variable declaration
// <var, let, or const> namOfVariable = function(){code to call when executed}

var addSomeNums = function(){
    let num1 = 100
    let num2 = 200
    return num1 + num2
}

console.log(addSomeNums)
console.log(addSomeNums())
// main diff from regular function is the naming convention of those, but 
// ultimately do the same thing

let addMoreNums = function(num1, num2){
    return num1 + num2
}
console.log(addMoreNums(10,20))



// ARROW FUNCTION EXPRESSION
// in Python we had the lambda function, this is sort of like that where it is
// an anonymous function shorter function

// var varName = () => {}

var myFirstArrowFunc = () => {}
console.log(myFirstArrowFunc)
console.log(typeof myFirstArrowFunc)


// Arrow Function with parameters
// remove the 'function' keyword and add an '=>' between the (params) and {code}
let addNumsArrow = (num1, num2) => {
    return num1 + num2
}

console.log(addNumsArrow(15,30))

// IF {code} is one line with only a return, you can remove the {} and 'return'
let addNumsArrow2 = (num1, num2) => num1 + num2
console.log(addNumsArrow2(10,25))

// IF there is ONE and ONLY ONE parameter, () are not necessary
let addTen = num => num + 10
console.log(addTen(24))


// Create and arrow function for exercise 2 of last night's homework
// Given an array, return the sum of all the positive elements
// [10, 12, -9, 3, -1, 0, 15]

// let sumOfNums = 0

// let sumNums = array => { 
//     for(let num = 0; num < array.length; num++){
//         if (array[num] > 0){
//             sumOfNums += array[num]
//             return sumOfNums
//         }
//     }
// }

// console.log(sumNums([10, 12, -9, 3, -1, 0, 15]))
// my attempt was a FAIL!!!


let totalPositives = arr => {
    let totalPos = 0
    for (let num of arr){
        if (num > 0){
            totalPos += num
        }
    }
    return totalPos
}

console.log(totalPositives([10, 12, -9, 3, -1, 0, 15]))


