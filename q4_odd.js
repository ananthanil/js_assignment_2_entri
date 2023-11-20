var readlineSync = require("readline-sync");

let limit = parseInt(readlineSync.question("Enter the limit : "));

let sum = 0;

for (let i = 0; i <= limit; i++) {
  if (i % 2 == 1) {
    sum = sum + i;
  }
}

console.log("Sum of odd numbers = " + sum);
