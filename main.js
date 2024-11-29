console.log("starting javascript");

// Exercise 1 //

const myName = "Thomas"
console.log(myName);

// Exercise 2 //

const myAge = 31
console.log(myAge);

// Exercise 3 //

const juliaAge = 32
const ageDiff = juliaAge - myAge
console.log(ageDiff);

// Exercise 4 //

if (myAge > 21) {
    console.log("You are older than 21")
} else if (myAge < 21) {
    console.log ("You are not older than 21")
}

// Exercise 5 //

if (myAge > juliaAge) {
    console.log("Julia is younger than you")
} else if (myAge < juliaAge) {
    console.log ("Julia is older than you")
} else if (myAge === juliaAge) {
    console.log ("You have the same age as Julia")
}

// Exercise 6 //

const classNames = ["Thomas", "Dima", "Jonas", "Maria", "Diogo", "Raul", "Hassan"];
console.log(classNames[0]);
console.log(classNames[6]);
for (j = 0; j < classNames.length; j++) {
    console.log(classNames[j])
}

// Exercise 7 // Need to add conditional to print only even number

// const studentsAge = [31, 33, 18, 28, 30, 40, 29"];
// while (j < studentsAge.length) {
//     console.log(studentsAge[j]);
//     j++
// }

// Exercise 8 // 
// The sum of the array of numbers is calculated by looping through the array and adding the value of each array element to a variable called sum.//

const studentsAge = [31, 33, 18, 28, 30, 40, 29];
let sum = 0;
for (j = 0; j < studentsAge.length; j++) { 
    sum = sum += studentsAge[j];
}
console.log(sum)