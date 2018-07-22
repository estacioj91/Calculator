let displayVal = "";
let valueArray = [];
clearHandler = () => {
  const display = document.getElementsByClassName("display");
  display[0].innerText = "0";
  displayVal = "";
  valueArray = [];
};
backHandler = () => {
  const display = document.getElementsByClassName("display");
  display[0].innerText = display[0].innerText.slice(0,-1);
  displayVal = display[0].innerText;

};
numHandler = event => {
  const num = event.target.innerText;
  const display = document.getElementsByClassName("display");
  displayVal += num;
  display[0].innerText = displayVal;
};
divHandler = event => {
  const display = document.getElementsByClassName("display");
  if(displayVal != ""){
    valueArray.push(displayVal);
  }
  valueArray.push("/");
  display[0].innerText = "";
  displayVal = "";
  console.log(valueArray);
};
multHandler = event => {
  const display = document.getElementsByClassName("display");
  if(displayVal != ""){
    valueArray.push(displayVal);
  }
  display[0].innerText = "";
  valueArray.push("*");
  displayVal = "";
  console.log(valueArray);
};
subHandler = event => {
  const display = document.getElementsByClassName("display");
  if(displayVal != ""){
    valueArray.push(displayVal);
  }
  valueArray.push("-");
  display[0].innerText = "";
  displayVal = "";
  console.log(valueArray);
};
sumHandler = event => {
  const display = document.getElementsByClassName("display");
  if(displayVal != ""){
    valueArray.push(displayVal);
  }
  valueArray.push("+");
  display[0].innerText = "";
  displayVal = "";
  console.log(valueArray);
};
equalHandler = event => {
  let firstVal = Number(valueArray[0]);
  let equals = 0;
  const display = document.getElementsByClassName("display");
  valueArray.push(displayVal);
  console.log(valueArray.length);
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
      console.log("here");
      firstVal = firstVal / Number(valueArray[index + 1]);
      equals = firstVal;
    }
  }
  display[0].innerText = equals;
  displayVal = "";
  valueArray= [];
  valueArray.push(equals)
  console.log(valueArray);
};
