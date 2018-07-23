let displayVal = "";
let valueArray = [];
let equalsPressed = false;
let signPress = false;
clearHandler = () => {
  const display = document.getElementsByClassName("display");
  display[0].innerText = "0";
  displayVal = "";
  valueArray = [];
};
backHandler = () => {
  const display = document.getElementsByClassName("display");
  displayVal = display[0].innerText;
  valueArrayPopped = valueArray.pop();
  if (Number(valueArrayPopped) === Number(displayVal)) {
    displayVal = displayVal.slice(0, -1);
    valueArray.push(displayVal);
    display[0].innerText = displayVal;
  } else {
    valueArray.push(valueArrayPopped);
    displayVal = displayVal.slice(0, -1);
  }
  display[0].innerText = displayVal;
};
numHandler = event => {
  if (equalsPressed == true && signPress != true) {
    valueArray = [];
    equalsPressed = false;
  }
  const num = event.target.innerText;
  const display = document.getElementsByClassName("display");
  if (valueArray) {
  }
  displayVal += num;
  display[0].innerText = displayVal;
};
divHandler = event => {
  const display = document.getElementsByClassName("display");
  if (displayVal != "") {
    valueArray.push(displayVal);
  }
  if (valueArray[valueArray.length - 1] != "/") {
    valueArray.push("/");
  }

  display[0].innerText = "";
  displayVal = "";
  signPress = true;
  equalsPressed = false;
};
multHandler = event => {
  const display = document.getElementsByClassName("display");
  if (displayVal != "") {
    valueArray.push(displayVal);
  }
  display[0].innerText = "";
  if (valueArray[valueArray.length - 1] != "*") {
    valueArray.push("*");
  }
  displayVal = "";

  signPress = true;
  equalsPressed = false;
};
subHandler = event => {
  const display = document.getElementsByClassName("display");
  if (displayVal != "") {
    valueArray.push(displayVal);
  }
  if (valueArray[valueArray.length - 1] != "-") {
    valueArray.push("-");
  }
  display[0].innerText = "";
  displayVal = "";

  signPress = true;
  equalsPressed = false;
};
sumHandler = event => {
  const display = document.getElementsByClassName("display");
  if (displayVal != "") {
    valueArray.push(displayVal);
  }
  if (valueArray[valueArray.length - 1] != "+") {
    valueArray.push("+");
  }
  display[0].innerText = "";
  displayVal = "";

  signPress = true;
  equalsPressed = false;
};
equalHandler = event => {
  let firstVal = Number(valueArray[0]);
  let equals = 0;
  if (equalsPressed == true) {
    return;
  }
  const display = document.getElementsByClassName("display");
  valueArray.push(displayVal);

  for (index = 0; index < valueArray.length; index++) {
    if (valueArray[index] == "*") {
      firstVal = firstVal * Number(valueArray[index + 1]);
      equals = firstVal;
    } else if (valueArray[index] == "-") {
      firstVal = firstVal - Number(valueArray[index + 1]);
      equals = firstVal;
    } else if (valueArray[index] == "+") {
      firstVal = firstVal + Number(valueArray[index + 1]);
      equals = firstVal;
    } else if (valueArray[index] == "/") {
      firstVal = firstVal / Number(valueArray[index + 1]);
      equals = firstVal;
    }
  }

  equals = Number(equals);
  if (equals % 1 != 0) {
    equals = equals.toFixed(2);
  }
  display[0].innerText = equals;
  displayVal = "";
  valueArray = [];
  valueArray.push(equals);

  equalsPressed = true;
};
zeroHandler = event => {
  if (equalsPressed == true && signPress != true) {
    valueArray = [];
    equalsPressed = false;
  }
  const num = event.target.innerText;
  const display = document.getElementsByClassName("display");
  if (valueArray) {
  }
  displayVal += num;
  display[0].innerText = displayVal;
};
