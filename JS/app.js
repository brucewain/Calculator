const keys = document.querySelector(".cal_keys");
const display = document.querySelector(".cal_display");
const zeroDisplay = display.innerText; //This reads the text inside display

const numberButtons = document.querySelectorAll([".data-number"]);
const operationButtons = document.querySelectorAll([".data-operation"]);
const equalsButtons = document.querySelectorAll([".data-equals"]);
const allClearButtons = document.querySelectorAll([".data-all-clear"]);

//REGISTER BUTTONS

let firstInput = function () {
  keys.addEventListener("click", function (e) {
    let calcinput = e.target.innerText;
    display.appendChild(document.createTextNode(calcinput));
    console.log(e.target.innerText);
    return;
  });
};
firstInput();

// I am trying to replace the 0 from the display with the keypad inputs, but it is adding onto it.
