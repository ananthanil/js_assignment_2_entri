var readlineSync = require("readline-sync");

let limit = parseInt(readlineSync.question("Enter the limit : "));

let array = [];

let count = 0;

for (let i = 1; i <= limit; i++) {
  array.push(
    parseInt(readlineSync.question("Enter the " + i + "th element : "))
  );
}

for (let i = 0; i <= array.length; i++) {
  if (array[i] % 2 == 0) {
    count++;
  }
}

console.log("Number of even numbers in the given array is " + count);
