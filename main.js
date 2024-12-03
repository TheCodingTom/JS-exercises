// console.log("starting javascript");

// // Exercise 1 //

// const myName = "Thomas"
// console.log(myName);

// // Exercise 2 //

// const myAge = 31
// console.log(myAge);

// // Exercise 3 //

// const juliaAge = 32
// const ageDiff = juliaAge - myAge
// console.log(ageDiff);

// // Exercise 4 //

// if (myAge > 21) {
//     console.log("You are older than 21")
// } else if (myAge < 21) {
//     console.log ("You are not older than 21")
// }

// // Exercise 5 //

// if (myAge > juliaAge) {
//     console.log("Julia is younger than you")
// } else if (myAge < juliaAge) {
//     console.log ("Julia is older than you")
// } else if (myAge === juliaAge) {
//     console.log ("You have the same age as Julia")
// }

// Exercise 6 //

// const classNames = ["Thomas", "Dima", "Jonas", "Maria", "Diogo", "Raul", "Hassan"];
// console.log(classNames[0]);
// console.log(classNames[6]);
// for (j = 0; j < classNames.length; j++) {
//     console.log(classNames[j])
// }

// Exercise 7A // even numbers

// const studentsAge = [31, 33, 18, 28, 30, 40, 29];
// let j = 0
// while (j < studentsAge.length) {
//     if (studentsAge[j] % 2 === 0) {
//         console.log(studentsAge[j]);
//     }
//      j++
// }

// Exercise 7B // all of them

// const studentsAge = [31, 33, 18, 28, 30, 40, 29];
// let j = 0
// for (j = 0; j < studentsAge.length; j++) {

//         console.log(studentsAge[j]);
//     }

// Exercise 8 //
// The sum of the array of numbers is calculated by looping through the array and adding the value of each array element to a variable called sum.//

// const studentsAge = [31, 33, 18, 28, 30, 40, 29];
// let sum = 0;
// for (j = 0; j < studentsAge.length; j++) {
//     sum = sum += studentsAge[j];
// }
// console.log(sum)

// Exercise 9 // why am I getting more than one result (final one is correct)

// const array = [1, 2, 8, 3, 2]
// let sum = 0;
// for (j = 0; j < array.length; j++) {
//     if (array[j] % 2 === 0) {
//         sum = sum += array[j]
//     }
//     console.log(sum)
// }

// Exercise 10 - NOPE
// const array = [1, 2, 8, 3, 2, 3, 4]
// let sum = 0
// for (j = 0; j < array.lenght; j++) {
//     if (array[j] % 2 === 0)
//         sum += array[j]
//     }
//     console.log(sum)

// Exercise 11 - YES

// function result() {
//     console.log(3*5)
// }
// result()

// Exercise 12 - YES

function result() {
  const a = 3;
  const b = 5;
  return "This is the result:" + a * b;
}
const c = result();
console.log(c);

// Exercise 13 - YES

function calculation(number1, number2) {
  console.log("This is the result:" + number1 * number2);
}
calculation(5, 10);
calculation(4, 20);
calculation(8, 9);

// Exercise 14 - Fix 2nd option

function typeOfTriangle(side1, side2, side3) {
  if (side1 == side2 && side1 == side3 && side2 == side3) {
    console.log("Equilateral");
  } else if (side1 == side2 && side1 === side3 && side2 !== side3) {
    console.log("Isosceles");
  } else if (side1 != side2 && side1 != side3 && side2 != side3) {
    console.log("Scalene");
  }
  return typeOfTriangle;
}
typeOfTriangle(1, 2, 3);

// Exercise 15 - YES

function getSmallestNumber() {
  const numbers = [9,2,3,4,6,67,72,1,3]
  let smallNumber = numbers[0] // lo zero indica il primo numero dell'array numbers (ovvero 9)
  for (let i = 0; i < numbers.length; i++) {
    // se un elemento dell'array è minore di numbers[0] (ovvero il num 9), bisogna aggiornare l'elemento dell'array con quell'elemento finché non troviamo il numero più basso
    if (numbers[i] < smallNumber) {
      smallNumber = numbers[i]
    }
  }
  console.log(smallNumber);
}
// getSmallestNumber()

// exercise 16 - YESSSSSS

function getBiggestNumber() {
  const numbers = [1,2,3]
  let maxNumber = numbers[0] // lo zero indica il numero 1 dell'array
  for (let i = 0; i < numbers.length; i++) {
    // se qualunque elemento dell'array numbers (in questo caso 2 e 3) è maggiore di maxNumber, bisogna aggiornare il maxNumber con quel elemento dell'array (prima con 2, poi il loop avviene un'altra volta e il numero viene aggiornato con 3)
    if (numbers[i] > maxNumber) { 
      maxNumber = numbers[i]
    }
    
  }
  console.log(maxNumber);
}
// getBiggestNumber()
