var readlineSync = require("readline-sync");

let mark = parseInt(readlineSync.question("Enter the mark : "));

if (mark >= 90) {
  console.log("You have A grade");
} else if (mark >= 80) {
  console.log("You have B grade");
} else if (mark >= 70) {
  console.log("You have C grade");
} else if (mark >= 60) {
  console.log("You have D grade");
} else if (mark >= 50) {
  console.log("You have E grade");
} else if (mark < 50) {
  console.log("Failed");
} else {
  console.log("Please enter mark");
}
