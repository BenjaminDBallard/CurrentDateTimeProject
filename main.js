// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.
function numString() {
  let num = document.getElementById("num-str").value;
  let nowString = num.toString();
  document.getElementById("display-element-2").innerHTML = nowString;
}

// Write a JavaScript program to convert a string to the number.
function stringNum() {
  let string = document.getElementById("str-num").value;
  let nowNumber = parseInt(string);
  document.getElementById("display-element-3").innerHTML = nowNumber;
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

function getInputType(value) {
  if (value === "") {
    return "";
  } else if (value === "true" || value === "false") {
    return "boolean";
  } else if (!Number.isNaN(Number(value))) {
    return "number";
  } else return typeof value;
}

function dataType() {
  let input = document.getElementById("type").value;
  let data = getInputType(input);
  document.getElementById("display-element-4").innerHTML = data;
}

// Write a JavaScript program that adds 2 numbers together.
function add() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let sum = num1 + num2;
  document.getElementById("display-element-5").innerHTML = sum;
}

// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true.

function truth() {
  console.log(document.getElementById("dot1").checked);
  let a = document.getElementById("dot1").checked;
  let b = document.getElementById("dot2").checked;
  if (a === true && b === true) {
    document.getElementById("display-element-6").innerHTML = "both are true";
  } else if ((a === true && b === false) || (a === false && b === true)) {
    document.getElementById("display-element-6").innerHTML = "one is true";
  } else if (a === false && b === false) {
    document.getElementById("display-element-6").innerHTML = "both are false";
  }
}
// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
