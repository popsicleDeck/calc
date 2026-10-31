// console.log(
//   `1st: ${firstNum}, 2nd: ${secondNum}, operator: ${operator}, fsum: ${firstSum}`,
// );
let clear = document.querySelector("#clear");
let mathOperators = document.querySelectorAll(".mathOperators > button");
let equal = document.querySelector("#equal");
let display = document.querySelector(".display");
let nums = document.querySelectorAll(".nums > button");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum = "";
let operator;
let secondNum = "";
let firstSum;

const operate = (operator, a, b) => {
  a = +a;
  b = +b;

  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      if (b === 0) {
        alert("Nuh uh, no division by 0 for you.");
        break;
      }
      return Math.round(divide(a, b) * 10) / 10;
      break;
    default:
      console.log("Your mom is gay");
  }
};
mathOperators.forEach(function (elem) {
  elem.addEventListener("click", function () {
    if (operator === undefined) {
      operator = this.textContent;
      display.textContent += operator;
    } else {
      firstSum = operate(operator, firstNum, secondNum);
      secondNum = "";
      operator = this.textContent;
      display.textContent += operator;
    }
  });
});

nums.forEach(function (elem) {
  elem.addEventListener("click", function () {
    if (operator === undefined) {
      firstNum += this.textContent;
      display.textContent = firstNum;
    } else {
      secondNum += this.textContent;
      display.textContent += this.textContent;
    }
  });
});

equal.addEventListener("click", () => {
  if (firstSum === undefined) {
    display.textContent = operate(operator, firstNum, secondNum);
  } else {
    display.textContent = operate(operator, firstSum, secondNum);
  }
});

clear.addEventListener("click", () => {
  firstNum = "";
  operator;
  secondNum = "";
  firstSum;
  display.textContent = "";
});

// keyboard support
document.addEventListener("keydown", function (event) {
  if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(+event.key)) {
    if (operator === undefined) {
      firstNum += event.key;
      display.textContent = firstNum;
    } else {
      secondNum += event.key;
      display.textContent += event.key;
    }
  } else if (["+", "-", "/", "*"].includes(event.key)) {
    if (operator === undefined) {
      operator = event.key;
      display.textContent += operator;
    } else {
      firstSum = operate(operator, firstNum, secondNum);
      secondNum = "";
      operator = event.key;
      display.textContent += operator;
    }
  } else if (event.key === "=") {
    if (firstSum === undefined) {
      display.textContent = operate(operator, firstNum, secondNum);
    } else {
      display.textContent = operate(operator, firstSum, secondNum);
    }
  }
});
