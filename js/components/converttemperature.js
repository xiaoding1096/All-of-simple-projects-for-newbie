const convertButton = document.getElementById("convert-btn");
const userTemperatureInput = document.getElementById("temperature-input");
const typeOfTemperature = document.getElementById("type-of-temperature");
const temperatureDisplay = document.getElementById("temperature-display");

let result = "";
convertButton.addEventListener("click", () => {
  const temp = parseInt(userTemperatureInput.value);
  console.log(temp);
  if (isNaN(temp)) {
    temperatureDisplay.textContent = "Please select a valid temperature type.";
    return;
  }
  if (typeOfTemperature.value === "celsius") {
    result = `${temp}°C is ${(temp * 1.8 + 32).toFixed(2)}°F`;
  } else if (typeOfTemperature.value === "fahrenheit") {
    result = `${temp}°F is ${((temp - 32) / 1.8).toFixed(2)}°C `;
  } else {
    result = "Please select a valid temperature type."
  }
  temperatureDisplay.textContent = result;
  userTemperatureInput.value = "";

});
