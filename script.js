// let plus = document.querySelector("#plus");
// let minus = document.querySelector("#minus");
// let divide = document.querySelector("#divide");
// let times = document.querySelector("#times");
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
      return divide(a, b);
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
      // console.log(
      //   `1st: ${firstNum}, 2nd: ${secondNum}, operator: ${operator}, fsum: ${firstSum}`,
      // );
    } else {
      firstSum = operate(operator, firstNum, secondNum);
      secondNum = "";
      operator = this.textContent;
      display.textContent += operator;
      // console.log(
      //   `1st: ${firstNum}, 2nd: ${secondNum}, operator: ${operator}, fsum: ${firstSum}`,
      // );
    }
  });
});

nums.forEach(function (elem) {
  elem.addEventListener("click", function () {
    if (operator === undefined) {
      firstNum += this.textContent;
      display.textContent = firstNum;
      // console.log(
      //   `1st: ${firstNum}, 2nd: ${secondNum}, operator: ${operator}, fsum: ${firstSum}`,
      // );
    } else {
      secondNum += this.textContent;
      display.textContent += this.textContent;
      // console.log(
      //   `1st: ${firstNum}, 2nd: ${secondNum}, operator: ${operator}, fsum: ${firstSum}`,
      // );
    }
  });
});

equal.addEventListener("click", () => {
  if (firstSum === undefined) {
    display.textContent = operate(operator, firstNum, secondNum);
  } else {
    display.textContent = operate(operator, firstSum, secondNum);
  }
  // console.log(
  //   `1st: ${firstNum}, 2nd: ${secondNum}, operator: ${operator}, fsum: ${firstSum}`,
  // );
});

clear.addEventListener("click", () => {
  firstNum = "";
  operator;
  secondNum = "";
  firstSum;
  display.textContent = "";
});
