document.addEventListener("DOMContentLoaded", function () {
  const temperatureInput = document.getElementById("temperature");
  const unitSelect = document.getElementById("unit");
  const convertButton = document.getElementById("convert");
  const resetButton = document.getElementById("reset");
  const result = document.getElementById("result");

  convertButton.addEventListener("click", function () {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    let convertedTemperature;

    if (isNaN(temperature)) {
      result.textContent = "Please enter a valid number...";
      return;
    }

    switch (unit) {
      case "celsius":
        convertedTemperature = (temperature - 32) * (5 / 9) + 273.15;
        break;
      case "fahrenheit":
        convertedTemperature = (temperature - 273.15) * (9 / 5) + 32;
        break;
    }

    result.textContent = `Converted temperature: ${convertedTemperature.toFixed(
      2
    )} ${unit}`;
  });

  resetButton.addEventListener("click", function () {
    temperatureInput.value = "";
    unitSelect.selectedIndex = 0;
    resultParagraph.textContent = "";
  });
});
