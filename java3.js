
// ==================================
// FARMGEN - JAVASCRIPT
// ==================================


// 1. WEATHER UPDATES

function getWeather() {

    let city = document.getElementById("city").value.trim();

    let result = document.getElementById("weatherResult");

    if (city === "") {
        result.textContent = "Please enter your district.";
        return;
    }

    // Sample weather data for demonstration
    let weatherData = {
        "chennai": "Temperature: 32°C | Condition: Sunny",
        "coimbatore": "Temperature: 29°C | Condition: Cloudy",
        "madurai": "Temperature: 34°C | Condition: Sunny",
        "salem": "Temperature: 30°C | Condition: Partly Cloudy",
        "tiruchirappalli": "Temperature: 33°C | Condition: Sunny"
    };

    let weather = weatherData[city.toLowerCase()];

    if (weather) {
        result.textContent = city + " Weather: " + weather;
    } else {
        result.textContent =
            "Sample weather data is unavailable for " + city +
            ". Please try another district.";
    }
}


// 2. FARMER REGISTRATION

document.getElementById("farmerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("farmerName").value.trim();

    let age = document.getElementById("farmerAge").value;

    let phone = document.getElementById("farmerPhone").value;

    let location = document.getElementById("farmerLocation").value.trim();

    let crop = document.getElementById("farmerCrop").value;

    let result = document.getElementById("registrationResult");

    if (name === "" || location === "" || crop === "") {
        result.textContent = "Please fill all the details.";
        return;
    }

    result.textContent =
        "Registration Successful! Welcome to FARMGEN, " +
        name + ". Your selected crop is " + crop + ".";

    document.getElementById("farmerForm").reset();

});


// 3. PLANT DISEASE IDENTIFICATION
// Preliminary symptom-based guidance only

function checkDisease() {

    let symptom = document.getElementById("symptom").value;

    let result = document.getElementById("diseaseResult");

    let advice = "";

    switch (symptom) {

        case "yellow":
            advice = "Yellow leaves may be associated with nutrient deficiency, overwatering or root problems. Check soil moisture and seek expert advice.";
            break;

        case "spots":
            advice = "Brown or black spots may indicate fungal or bacterial leaf diseases. Avoid wetting foliage and get the plant examined.";
            break;

        case "wilting":
            advice = "Wilting may result from water stress, root damage or disease. Check soil moisture and inspect the roots.";
            break;

        case "powder":
            advice = "White powder on leaves may be a sign of powdery mildew. Seek agricultural advice about suitable treatment.";
            break;

        default:
            advice = "Please select a plant symptom first.";
    }

    result.textContent = advice;
}
