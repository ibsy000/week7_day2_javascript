/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10

*/

// function toCelcius(farH){
//     return (farH - 32) * 5 / 9
// }
// console.log(toCelcius(32))
// console.log(toCelcius(212))
// console.log(toCelcius(50))
// SUCCESS!!

// now let's try out the Arrow Function Expresion
let toCelcius = farH => (farH - 32) * 5 / 9

console.log(toCelcius(32))
console.log(toCelcius(212))
console.log(toCelcius(50))
// yay another SUCCESS!! 


// console.clear()




/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.

*/

class User{
    constructor(username, password){
        this.username = username
        this.password = password
    }

    changePass(currPassword, newPassword){
        if (currPassword === this.password){
            this.password = newPassword
            console.log(`You old password: ${currPassword} has been changed to: ${newPassword}`)
        } else {
            console.log("I'm sorry but that password doesn't match our records. Try again.")
        }
    }
}

newUser = new User('Mama Waffles', 'Ilovewaffles')
newUser.changePass('Ilivewaffles', 'Idontlovewafflesanymore')
console.log(newUser)
newUser.changePass('Ilovewaffles', 'Idontlovewafflesanymore')
console.log(newUser)

// oh my gosh, no way, SUCCESS!!! 





// console.clear()

/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []

*/

// function negInt(arrayInt){
//     negList = []
//     for (let num of arrayInt){
//         if (num < 0) {
//             negList.push(num ** 2)
//         }
//     }
//     return negList
// }

// console.log(negInt([-10, -3, 4, -2, 8, 9, -3]))
// console.log(negInt([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]))
// console.log(negInt([2, 4, 6, 8, 10]))

// okay so that's how you do that... now to figure out the Array method...

negInts = [-10, -3, 4, -2, 8, 9, -3]
negInts2 = [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]
negInts3 = [2, 4, 6, 8, 10]

// function negInt(num){
//     if (num < 0) {
//         return num ** 2
//     }
// }

// let negList = negInts.map(negInt)
// console.log(negList)

// .map() method was returning [100, 9, undefined, 4, undefined, undefined, 9]
// so I went with the forEach method instead

negList = []
negInts.forEach(num => {if (num < 0){negList.push(num ** 2)}})
console.log(negList)

negList2 = []
negInts2.forEach(num => {if (num < 0){negList2.push(num ** 2)}})
console.log(negList2)

negList3 = []
negInts3.forEach(num => {if (num < 0){negList3.push(num ** 2)}})
console.log(negList3)

// I tried the .filter() method but couldn't get the if statement to work right
// it just kept returning the negative integers and wouldn't square them

// console.clear()