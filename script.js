// let plus = document.querySelector("#plus");
// let minus = document.querySelector("#minus");
// let divide = document.querySelector("#divide");
// let times = document.querySelector("#times");
let display = document.querySelector(".display");
let nums = document.querySelectorAll(".nums > button");

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
