const prompt = require("prompt-sync")({ sigint: true });

let name = prompt(" Please enter your name: ");
console.log("Hello " + name + "!");

let userinput = "continue";
while (userinput !== "Exit" ) {
 let var1 = prompt("Enter the first number: ");
  var1 = Number(var1);
  if (isNaN(var1)) {
    console.log("Please enter a valid number");
    
  }
  console.log(var1);
  let var2 = prompt("Enter the second number: ");
  var2 = Number(var2);
  if (isNaN(var2)) {
    console.log("Please enter a valid number");
  
  }
  console.log(var2);
  userinput = prompt("Which operation would you like to perform: 1: Addition 2: Subtraction 3: Multiplication 4: Division 5: Ratio 6: Percentage 7: Square root 8: Elevate 9: Remainder 10: Exit ");
  
  switch (userinput) {
    case "1":
      console.log(`The addition of two numbers is : ${var1 + var2}`);
      break;
    case "2":
      console.log(`The subtraction of two numbers is : ${var1 - var2}`);
      break;
    case "3":
      console.log(`The multiplication of two numbers is : ${var1 * var2}`);
      break;
    case "4":
      if (var2 === 0) {
        console.log("Error: Divisor cannot be zero");
      } else {
        console.log(`The division of two numbers is : ${var1 / var2}`);
      }
      break;
    case "5":
      let width = prompt("Enter the width: ");
      width = Number(width);
      console.log(
        `The ratio of two numbers is : ${(var1 / (var2 * width)).toFixed(2)}`);
      break;
    case "6":
      console.log(
        `The percentage of two numbers is : ${((var1 / var2) * 100).toFixed(2)}%`);
      break;
    case "7":
      console.log(`The square root of the number is : ${Math.sqrt(var1)}`);
      break;
    case "8":
      console.log(`The result of the number is : ${Math.pow(var1, var2)}`);
      break;
    case "9":
      console.log(`The remainder of the number is : ${var1 % var2}`);
      break;
    case "10":
      console.log("Goodbye!");
      break;
    default:
      console.log("Invalid input");
      break;
  }
  if (userinput === "10") {
    break;
  }  
}
