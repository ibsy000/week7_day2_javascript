// console.log('Hello from array methods!')

/*
    ARRAY Methods
*/

// Create an array with chich we will workd
let names = ['Mike', 'Frank', 'Alison', 'Fred', 'William']

// Basic Looping
for (let i = 0; i < names.length; i++){
    console.log(names[i])
}

console.log("=================================")
// For...of
for (let name of names){
    console.log(name)
}

console.log("=================================")

// Array.prototype.forEach()
names.forEach(element => console.log(element))


console.log("=================================")

// Callback Function

// what's in the ()*can be whatever names you want*
// and the function name can be whatever you want
function callBack(name, idx, arr){
    console.log(name, idx, arr)
}
// the 'forEach' is what's looping through each (element, index, array)
names.forEach(callBack)


names.forEach(name => console.log(name.toUpperCase()))


// Array.prototype.map()
// map() is a method on the Array
// apply the function to every element in the array
function mapCallBack(element, index){
    if (index % 2 === 0){
        return element.toUpperCase()
    } else {
        return element.toUpperCase()
    }     
}
// return values went into new variable newNames
let newNames = names.map(mapCallBack)
console.log(names)
console.log(newNames)

// As Arrow Function / One Line -----Terinary
let newerNames = names.map((e,i) => i%2 === 0 ? e.toUpperCase() : e.toLocaleLowerCase())
console.log(newerNames)



// Array.prototype.filter() --- method specific to Arrays
// truthiness applies, return a value that is either true or false, if true keep if not remove
let cities = ['Chicago', 'Boston', 'Chattanooga', 'Baton Rouge', 'Champaign', 'Denver']
console.log(cities)


function startsWithC(cityName){
    return cityName[0].toUpperCase === 'C'
}

let cNameCitiesMap = cities.map(startsWithC)
console.log(cNameCitiesMap)

let cNameCitiesFilter = cities.filter(startsWithC)
console.log(cNameCitiesFilter)


// As an Arrow Function
