// ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
// Coding practical questions

// Be sure to use all given test cases

// 1. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//function called getFib
//takes in a value with 2 values as an argument and produces an array with a length of 10 that follows fibonaccis seq
//need to produce fibonacci sequence to 10 positions (which is a pattern: a, b, c, d.... where c= a+b, d=b+c, e=c+d, ... )



const getFib = () => {
  let fibArray = [0, 1, 1]
  for (var i=2; i<9; i++) {
    let i1 = fibArray.length-1
    let i2 = fibArray.length-2
    let nextNum = fibArray[i1] +fibArray[i2]
    fibArray.push(nextNum)
    }
  return fibArray
}

console.log(getFib())

// 2. Write a function called oddChecker that takes in an array and returns a new array of only odd numbers.


var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [9, 7, 199, -9]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [7, 23, -823]

const oddChecker = (array) => array.filter(value => {
  if ((typeof value === "number") && (Math.abs(value)%2 !== 0))
  return value
} )

console.log(oddChecker(fullArr1))
console.log(oddChecker(fullArr2))

// 3. Given the object below, complete the console.log to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}


// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
//not working
console.log(bicycle.wheels.specs[2])


// 4. Write a function that takes in an array and returns an array in reverse order.

var originalArray1 = [1, 2, 3, 4, 5, 6, 7]
// Expected output: [7, 6, 5, 4, 3, 2, 1],
var originalArray2 = ["9", "1", "o", "h", "c", "e"]
// Expected output: ["e", "c", "h", "o", "1", "9"]


let newArr1 = originalArray1.reverse();
let newArr2 = originalArray2.reverse();

console.log(newArr1);
console.log(newArr2);

// 5. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.

var ourString = "Hello Learn Students!"
// Expected output: 3

// function called letterCounter
// takes one argument (a string)
//counts the number of occurences of "l" and "L"

const letterCounter = (str) => {
  let newArr = Array.from(str);
  let newArr1 = newArr.filter(val => {
      if (val === "L" || val === "l") {
        return val
      }
  })
  return newArr1.length
}

console.log(letterCounter(ourString))



// 6. Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//function called medianLetter
//takes in 1 argument (string)
//outputs the middle letter; if odd number of characters outputs the middle two

let medianLetter = (str) => {
  let newArr2 = Array.from(str);
  if (newArr2.length % 2 === 0) {
    const halvedIndex1 = (newArr2.length)/2 - 1
    const halvedIndex2 = (newArr2.length)/2 
    return newArr2[halvedIndex1] + newArr2[halvedIndex2]
  } else {
    const midNumIndex = (newArr2.length)/2 + 0.5
    return newArr2[midNumIndex]
  }
}

console.log(medianLetter(middleLetters2))
console.log(medianLetter(middleLetters1))


// 7. Write a program to get the area of a sphere using object classes. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

class Sphere {
  constructor(radius) {
    this.radius = radius;
  }
  get area() {
    return this.calcArea();
  }
  calcArea() {
    return 4 * Math.PI * this.radius * this.radius;
  }
}

const sphere1 = new Sphere(3);
const sphere2 = new Sphere(1);
const sphere3 = new Sphere(6);

console.log(sphere1.area);
console.log(sphere2.area);
console.log(sphere3.area);

// 8. Use object destructuring to return the nested values of specs. Expected output: 4, "manual"
// Don't overthink this one, it's just destrcturing practice.

var myCar = {
  make: "VW",
  model: "Jetta",
  specs: {
    doors: 4,
    transmission: "manual",
  }
}

const {doors, transmission} = myCar.specs;
console.log(doors);
console.log(transmission);



// STRETCH: Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

let arraySum = (arr) => {
  if (arr.length === 0) {
    return arr
  } else {
    const newArray = arr.map((value, index) => {
      if ([index] >= 1) {
      return value + value[index-1]
      } else {
        return value
      }
    })
    return newArray
  }
}

console.log("FIX THIS")
console.log(arraySum(numbersToAdd1));
console.log(arraySum(numbersToAdd2));
console.log(arraySum(numbersToAdd3));

