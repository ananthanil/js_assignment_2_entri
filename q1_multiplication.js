var readlineSync = require("readline-sync");

let limit = parseInt(readlineSync.question("Enter the limit : "));

let mul = parseInt(readlineSync.question("Enter the number : "));

for (let i = 1; i <= limit; i++) {
  console.log(i + " * " + mul + " = " + i * mul);
}
