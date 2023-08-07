

// Function to convert temperature
function convertTemperature() {
  const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;
  let result;

  if (inputUnit === outputUnit) {
    result = inputTemperature;
  } else if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
    result = (inputTemperature * 9/5) + 32;
  } else if (inputUnit === "celsius" && outputUnit === "kelvin") {
    result = inputTemperature + 273.15;
  } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
    result = (inputTemperature - 32) * 5/9;
  } else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
    result = (inputTemperature - 32) * 5/9 + 273.15;
  } else if (inputUnit === "kelvin" && outputUnit === "celsius") {
    result = inputTemperature - 273.15;
  } else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
    result = (inputTemperature - 273.15) * 9/5 + 32;
  }

  document.getElementById("outputTemperature").value = result.toFixed(2);
}

// Event listeners to trigger the conversion
document.getElementById("inputTemperature").addEventListener("input", convertTemperature);
document.getElementById("inputUnit").addEventListener("change", convertTemperature);
document.getElementById("outputUnit").addEventListener("change", convertTemperature);

// Geolocation integration
const getLocationBtn = document.getElementById("getLocation");
getLocationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const apiKey = "8203666073e2fff839333ab1badda35e";
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
          const currentTemperature = data.main.temp;
          document.getElementById("inputTemperature").value = currentTemperature;
          document.getElementById("inputUnit").value = "kelvin";
          convertTemperature();
        })
        .catch((error) => {
          console.log("Error fetching weather data:", error);
        });
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
  
});
