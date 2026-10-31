// let plus = Document.querySelector("#plus");
// let minus = Document.querySelector("#minus");
// let divide = Document.querySelector("#divide");
// let times = Document.querySelector("#times");
let display = Document.querySelector(".display");
let nums = Document.querySelectorAll(".nums > button");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let operator;
let secondNum;

nums.addEventListener("click", function (e) {
  if (firstNum == undefined) {
    firstNum = this.textContent;
    display.textContent = firstNum;
  } else {
    secondNum = this.textContent;
    display.textContent += secondNum;
  }
});

const operate = (operator, firstNum, secondNum) =>
  operator(firstNum, secondNum);
