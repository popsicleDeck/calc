let plus = Document.querySelector("#plus");
let minus = Document.querySelector("#minus");
let divide = Document.querySelector("#divide");
let times = Document.querySelector("#times");

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let operator;
let secondNum;

const operate = (operator, firstNum, secondNum) =>
  operator(firstNum, secondNum);
