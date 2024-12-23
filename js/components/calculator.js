const numberDisplay = document.getElementById("number-display");
const reset = document.getElementById("btn-reset");
const result = document.getElementById("btn-result");
const buttons = document.querySelectorAll("button");

let operator = "";
let previousNumber = "";
let currentNumber = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    console.log(value);
    if (value === "C") {
      numberDisplay.value = "";
      operator = "";
      previousNumber = "";
      currentNumber = "";
      return;
    } else if (value === "=") {
      if (currentNumber !== "" && operator !== "" && previousNumber !== "") {
        const numb1 = parseFloat(previousNumber);
        const numb2 = parseFloat(currentNumber);
        let result;
        switch (operator) {
          case "+":
            result = numb1 + numb2;
            break;
          case "-":
            result = numb1 - numb2;
            break;
          case "x":
            result = numb1 * numb2;
            break;
          case "÷":
            result = numb2 !== 0 ? numb1 / numb2 : "Error";
            break;
        }
        currentNumber = result.toString();
        numberDisplay.value = currentNumber;
        previousNumber = "";
        operator = "";
      }
    } else if (["+", "-", "x", "÷"].includes(value)) {
      if (currentNumber !== "") {
        operator = value;
        previousNumber = currentNumber;
        currentNumber = "";
        console.log(`this is operator ${operator}`);
      }
    } else if (value === "%") {
      if (currentNumber !== "") {
        currentNumber = (parseFloat(currentNumber) / 100).toString();
        numberDisplay.value = currentNumber;
      }
    } else {
      if (currentNumber.includes(".")) return;
      currentNumber += value;
      numberDisplay.value = currentNumber;
    }
  });
});
