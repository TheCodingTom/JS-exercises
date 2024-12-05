// console.log("starting javascript");

// // Exercise 1 //

const myName = "Thomas";
// console.log(myName);

// // Exercise 2 //

const myAge = 31;
// console.log(myAge);

// // Exercise 3 //

const juliaAge = 32;
const ageDiff = juliaAge - myAge;
// console.log(ageDiff);

// // Exercise 4 //

if (myAge > 21) {
  console.log("You are older than 21");
} else if (myAge < 21) {
  console.log("You are not older than 21");
}

// // Exercise 5 //

if (myAge > juliaAge) {
  console.log("Julia is younger than you");
} else if (myAge < juliaAge) {
  console.log("Julia is older than you");
} else if (myAge === juliaAge) {
  console.log("You have the same age as Julia");
}

// Exercise 6 //

const classNames = [
  "Thomas",
  "Dima",
  "Jonas",
  "Maria",
  "Diogo",
  "Raul",
  "Hassan",
];
// console.log(classNames[0]);
// console.log(classNames[6]);
for (i = 0; i < classNames.length; i++) {
  // console.log(classNames[i]);
}

// Exercise 7A // even numbers

// const studentsAge = [31, 33, 18, 28, 30, 40, 29];
// let j = 0;
// while (j < studentsAge.length) {
//   if (studentsAge[j] % 2 === 0) {
//     console.log(studentsAge[j]);
//   }
//   j++;
// }

// Exercise 7B // all of them

// const studentsAge = [31, 33, 18, 28, 30, 40, 29];
// let j = 0;
// for (j = 0; j < studentsAge.length; j++) {
//   // console.log(studentsAge[j]);
// }

// Exercise 8 //
// The sum of the array of numbers is calculated by looping through the array and adding the value of each array element to a variable called sum.//

// const studentsAge = [31, 33, 18, 28, 30, 40, 29];
// let sum = 0;
// for (j = 0; j < studentsAge.length; j++) {
//   sum = sum += studentsAge[j]; // += same as writing sum = sum + studentesAge[j]
// }
// console.log(sum);

// Exercise 9

// const array = [1, 2, 8, 3, 2];
// let mySum = 0;
// for (i = 0; i < array.length; i++) {
//   if (array[i] % 2 === 0) {
//     mySum = mySum += array[i];
//   }
// }
// console.log(mySum); // log outside the for loop otherwise you'll get more than one result (until the loop is over)

// Exercise 10 - NOPE
const array = [1, 2, 8, 3, 2, 3, 4];
let sum = 0;
for (j = 0; j < array.lenght; j++) {
  if (j % 2 === 0) {
    sum += array[j];
  }
}
// console.log(sum);

// function evenNum() {
//   const array = [1, 2, 8, 3, 2, 3, 4];
//   let sumArray = [];
//   for (j = 0; j < array.lenght; j++) {
//     if (array[j] % 2 === 0) {
//       sumArray.push(array[i]);
//     }
//   }
//   console.log(sumArray);
// }

// Exercise 11

function result() {
  console.log(3 * 5);
}
// result()

// Exercise 12

function newResult() {
  const a = 3;
  const b = 5;
  const result = a * b; // more readable to create another variable that we're gonna return
  return result;
}
const c = newResult();
// console.log(c);

// Exercise 13 - YES

function calculation(number1, number2) {
  console.log("This is the result:" + " " + number1 * number2);
}
// calculation(5, 10);
// calculation(4, 20);
// calculation(8, 9);

// Exercise 14 - YES

function typeOfTriangle(side1, side2, side3) {
  if (side1 == side2 && side1 == side3 && side2 == side3) {
    console.log("Equilateral");
  } else if (
    (side1 === side2 && side1 !== side3 && side2 !== side3) ||
    (side1 !== side2 && side1 !== side3 && side2 === side3) ||
    (side1 !== side2 && side2 !== side3 && side1 === side3)
  ) {
    console.log("Isosceles");
  } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    // this could be removed and would become and "else"
    console.log("Scalene");
  }
}
// typeOfTriangle(4, 2, 1);

// Exercise 15

function getSmallestNumber() {
  const numbers = [9, 2, 3, 4, 6, 67, 72, 1, 3];
  let smallNumber = numbers[0]; // lo zero indica il primo numero dell'array numbers (ovvero 9)
  for (let i = 0; i < numbers.length; i++) {
    // se un elemento dell'array è minore di numbers[0] (ovvero il num 9), bisogna aggiornare l'elemento dell'array con quell'elemento finché non troviamo il numero più basso (la condizione è all'interno del loop quindi continua ad funzionare finché non troviamo il più basso)
    if (numbers[i] < smallNumber) {
      smallNumber = numbers[i];
    }
  }
  console.log(smallNumber);
}
// getSmallestNumber();

// exercise 16

function getBiggestNumber() {
  const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8];
  let maxNumber = numbers[0]; // lo zero indica il numero 1 dell'array
  for (let i = 0; i < numbers.length; i++) {
    // se qualunque elemento dell'array numbers è maggiore di maxNumber, bisogna aggiornare il maxNumber con quel elemento dell'array (prima con 2, poi il loop avviene un'altra volta e il numero viene aggiornato con 3 ecc)
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  console.log(maxNumber);
}
// getBiggestNumber();

// exercise 17

function firstIndex(array, index) {
  let myNumber = array[index]; // it doesn't matter which array or index you'll use
  return myNumber;
}
let myResult = firstIndex([3, 6, 67, 6, 56, 2, 4, 5], 1); // store in a variable what the function is returning
// console.log(myResult);

// exercise 18 - il passaggio importante è assegnare una variabile a myColor.join e printare quella variabile, non "myColor.join"

function joinedColors() {
  const myColor = ["Red", "Green", "White", "Black"];
  let colors = myColor.join(" and ");
  console.log(colors);
}
// joinedColors();

// exercise 19

function reverseNumber() {
  let myNumber = 12345;
  // let newNumber = myNumber.toString(); // trasforma il numero in stringa
  // let newNumber = myNumber.toString().split(""); // trasforma la stringa in array
  // let newNumber = myNumber.toString().split("").reverse(); // gira l'array al contrario
  let newNumber = myNumber.toString().split("").reverse().join(""); // unisce elementi di un array e le virgolette rimuovono virgola
  console.log(newNumber);
}
// reverseNumber();

// exercise 20 - YES

function newOrder() {
  let myWord = "christmas";
  let newWord = myWord.split("").sort().join("");
  console.log(newWord);
}
// newOrder();

// exercise 21 - longWord[i].lenght?

function longestWord() {
  let mySentence = "today is a beautiful day";
  let array = mySentence.split(" ");
  let longWord = ["raul", "is", "a", "magician"];

  for (let i = 0; i < array.length; i++) {
    if (array[i].lenght > longWord[i]) {
      longWord = array[i].lenght;
    }
  }
  console.log(array);
}
// longestWord();

// exercise 22 - replaceAll?

function replaceLetters(word) {
  let newWord = word.split("");
  for (let i = 0; i < newWord.length; i++) {
    //   if (newWord[i].lenght == "a") "a" == "1";
    // }
  }
}
replaceLetters("JavaScript");

// exercise 23 - YES

function capitalLetters() {
  let sentence = "prince of persia";
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1); //.substring() extracts characters between two positions and returns the string
  }
  words = words.join(" ");
  console.log(words);
}
// capitalLetters();

// exercise 24 - YES

function evenNumbers(number) {
  for (let myNumber = 0; myNumber < number; myNumber++) {
    if (myNumber % 2 === 0 && myNumber !== 0) {
      console.log(myNumber);
    }
  }
}

// evenNumbers(9);

// exercise 25 - comparare numero 1 con numero 2 per trovare il più piccolo, creare variabile in base al più piccolo

function oddNumbers(number1, number2) {
  for (let myNumber = 0; myNumber <= number2; myNumber++) {
    if (myNumber % 2 === 1) console.log(myNumber);
  }
}

// oddNumbers(1, 13);

// exercise 26 - two for loops? for (let j = i + 1; j < sortedArray.length; j++)

function repeatedNumbers(array) {
  let sortedArray = array.sort();
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
    }
  }
  console.log(sortedArray[i]);
}

// repeatedNumbers([
//   3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
//   100,
// ]);
