// let plus = document.querySelector("#plus");
// let minus = document.querySelector("#minus");
// let divide = document.querySelector("#divide");
// let times = document.querySelector("#times");
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
      return divide(a, b);
      break;
    default:
      console.log("Your mom is gay");
  }
};

mathOperators.forEach(function (elem) {
  elem.addEventListener("click", function () {
    operator = this.textContent;
    display.textContent += operator;
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
  display.textContent = operate(operator, firstNum, secondNum);
  // console.log(operate(operator, firstNum, secondNum));
});
