// numOne = prompt("Enter a number")
// operator = prompt("Enter an operator")
// numTwo = prompt("Enter a second number")


let numOne = "";
let operator = undefined;
let numTwo = "";

add = (numOne, numTwo) => {
  return numOne + numTwo;
};

subtract = (numOne, numTwo) => {
  return numOne - numTwo;
};

multiply = (numOne, numTwo) => {
  return numOne * numTwo;
};

divide = (numOne, numTwo) => {
  return numOne / numTwo;
};


operate = (numOne, operator, numTwo) => {
  if (operator === "+") {
    return add(numOne , numTwo);
  }
  else if (operator === "-") {
    return subtract(numOne, numTwo);
  }
  else if (operator === "*") {
    return multiply(numOne, numTwo);
  }
  else if (operator === "/") {
    return divide(numOne, numTwo);
  }
};

const display = document.querySelector('#display');

for (const button of document.querySelectorAll(".digitButton")) {
  console.log("clicked:", button.textContent);
  console.log(document.querySelectorAll(".digitButton"));
  button.addEventListener("click", () => {
    if (operator === undefined) {
      numOne = numOne + button.textContent;
      display.textContent = numOne;
    }
    else if (operator != undefined) {
      numTwo = numTwo + button.textContent;
      display.textContent = numTwo;
    };
  })
};

for (const button of document.querySelectorAll(".operateButton")) {
  button.addEventListener("click", () => {
    if (button.textContent != "=") {
      operator = button.textContent;
    }
    else if (button.textContent === "=") {
      display.textContent = operate(numOne, operator, numTwo);
    };
  });
};

// if display.textContent == "="
  // result = 
// display.addEventListener("click") = () => {
//   for (const button of document.querySelectorAll("digitButton")) {
//     numOne = button.textContent
//   }
// };


// const count = `${numOne}{add}{numTwo}`
// resetButton = addEventListener("click", () => {
//   count = 0;
// })



// digitButton.addEventListener("click", () => {
//   for (const square of document.querySelectorAll(".digitButton")) {
//     color = "white";
//     square.style.backgroundColor = `${color}`;
//     console.log("resetting a square", square);
//   };
// });
