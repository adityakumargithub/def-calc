// function for calculations

function calculate() {
  let num1 = document.getElementById("first").value;
  let num2 = document.getElementById("second").value;
  let operand = document.getElementById("operations").value;
  let result = document.getElementById("result");

  //switch case to perform different actions based on different conditions.

  switch (operand) {
    case "+":
      result.value = parseFloat(num1) + parseFloat(num2);
      break;

    case "-":
      result.value = parseFloat(num1) - parseFloat(num2);
      break;

    case "*":
      result.value = parseFloat(num1) * parseFloat(num2);
      break;

    case "/":
      result.value = parseFloat(num1) / parseFloat(num2);
      break;
  }
}

// function to reset all fields
function reset() {
  var inputElements = document.getElementsByTagName("input");

  for (var i = 0; i < inputElements.length; i++) {
    if (inputElements[i].type == "number") {
      inputElements[i].value = "";
    }
  }
}
