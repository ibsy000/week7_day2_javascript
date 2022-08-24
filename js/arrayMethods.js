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
let bNameCities = cities.filter(city => city[0].toUpperCase() === 'B');
console.log(bNameCities);
console.log(cities);

// Array.prototype.concat()
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

let arrAB = arrA.concat(arrB);
console.log(arrAB);
console.log(typeof arrAB)

console.log(arrA);
console.log(arrB);
console.log(arrAB);


// Array.prototype.includes()
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors.includes('purple'));
console.log(colors.includes('green'));


// Array.prototype.indexOf()
console.log(colors.indexOf('purple'));
console.log(colors.indexOf('green'));


// Array.prototype.join()
let myArrName = ['B', 'r', 'i', 'a', 'n']

console.log(myArrName.join(''));
console.log(myArrName.join('--'));


// Array.prototype.push()
console.log(colors.push('pink'));
console.log(colors);


// Array.prototype.pop()
//only pops the last element then returns that last element, and removes that element from the array
let lastElement = colors.pop();
console.log(lastElement);
console.log(colors);


// Array.prototype.reverse()
// reverses an array inPlace and return the reference to the same array
colors.reverse();
console.log(colors);
colors.reverse();
console.log(colors);


// Array.prototype.slice()
// uses a start and end just like Python and returns the sliced elements
// there is no step like in Python
console.log('Array Slice:')
console.log(colors);
console.log(colors.slice()); // colors[:] in Python
console.log(colors.slice(2)); // colors[2:] in Python
console.log(colors.slice(2,5)); // colors[2:5] in Python also excludes end index value
console.log(colors.slice(3, -1))



// Array.prototype.splice()
// splice(start, deleteCount, item1, item2, etc..)
// also inPlace
console.log('Array Splice:')
console.log(colors);
colors.splice(2, 1, 'pink', 'purple'); // after deleteCount the listed items are added after the items are deleted 
console.log(colors);



// Array.prototype.sort()
// sorts the elements of an array inPlace and returns the reference to the same array, now sorted
// .sort() converts the elements into strings then compares then sorts by unicode value
console.log('Sort!')
let unsortedArr = [23, 10, -10, 3, 5, -7]


function compareFunc(a, b){
    console.log('A:', a, 'B:', b);
    if (a > b){
        return 1
    } else if (a < b){
        return -1
    } else {
        return 0
    }
}


console.log(unsortedArr);
unsortedArr.sort(compareFunc);
console.log(unsortedArr);

let newUnsort = [3, 77, 34, -23, 35, 1, 11]

console.log(newUnsort);
newUnsort.sort((a,b) => a-b)
console.log(newUnsort);