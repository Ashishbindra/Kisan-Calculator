// ======================================================
// Smart Farming Weather Module
// Version 1.0
// Powered by Open-Meteo
// ======================================================

"use strict";

const WEATHER_API =
    "https://api.open-meteo.com/v1/forecast";

const GEOCODE_API =
    "https://nominatim.openstreetmap.org/reverse";

const weatherContainer =
    document.getElementById("weatherContainer");

// ======================================================
// Start Weather
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    loadWeather();

});

// ======================================================
// Load Weather
// ======================================================

async function loadWeather() {

    weatherContainer.innerHTML = `
        <div class="weather-loading">
            🌦 Loading Weather...
        </div>
    `;

    try {

        let latitude, longitude;

        try {

            const location = await getCurrentLocation();
            latitude = location.latitude;
            longitude = location.longitude;

        } catch (e) {

            // GPS नहीं मिला तो IP से लो
            const ip = await fetch("https://ipapi.co/json/");
            const data = await ip.json();

            latitude = data.latitude;
            longitude = data.longitude;

        }
        const city = await getCityName(latitude, longitude);
        const weather = await getWeather(latitude, longitude);

        renderWeather(
            city,
            weather
        );

    }

    catch (error) {

        console.error(error);

        showError();

    }

}

// ======================================================
// Get Current GPS Location
// ======================================================

function getCurrentLocation() {

    return new Promise((resolve, reject) => {

        if (!navigator.geolocation) {

            reject(new Error("Geolocation not supported"));

            return;

        }

        let done = false;

        navigator.geolocation.getCurrentPosition(

            position => {

                done = true;

                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });

            },

            error => {

                if (done) return;

                reject(error);

            },

            {
                enableHighAccuracy: false,
                timeout: 30000,
                maximumAge: Infinity
            }

        );

    });

}

// ======================================
// Reverse Geocoding (No API Key)
// ======================================

async function getCityName(lat, lon) {

    const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );

    const data = await response.json();

    console.log(data);

    if (data.localityInfo?.administrative) {

        const admin = data.localityInfo.administrative;

        // सबसे छोटे स्तर का नाम
        return admin[admin.length - 1].name;

    }

    return (
        data.locality ||
        data.city ||
        data.principalSubdivision ||
        "Current Location"
    );

}

// ======================================================
// Get Weather
// ======================================================

async function getWeather(lat, lon) {

    const url =
        `${WEATHER_API}?latitude=${lat}&longitude=${lon}` +
        "&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,pressure_msl,wind_speed_10m,is_day" +
        "&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max" +
        "&forecast_days=7" +
        "&timezone=auto";

    const response =
        await fetch(url);

    if (!response.ok) {

        throw new Error(
            "Weather API Error"
        );

    }

    return await response.json();

}

// ======================================================
// Weather Code → Icon
// ======================================================

function getWeatherIcon(code, isDay) {

    switch (code) {

        case 0:
            return isDay ? "☀️" : "🌙";

        case 1:
        case 2:
            return "🌤️";

        case 3:
            return "☁️";

        case 45:
        case 48:
            return "🌫️";

        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            return "🌦️";

        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
        case 82:
            return "🌧️";

        case 66:
        case 67:
            return "🌨️";

        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return "❄️";

        case 95:
        case 96:
        case 99:
            return "⛈️";

        default:
            return "🌍";

    }

}

// ======================================================
// Smart Farming Advice
// ======================================================

function getFarmingAdvice(current, daily) {

    const advice = [];

    const rain = daily.precipitation_probability_max[0];

    if (current.temperature_2m >= 38) {

        advice.push("🔥 सुबह या शाम सिंचाई करें।");

    }

    if (current.wind_speed_10m >= 25) {

        advice.push("💨 तेज हवा है। स्प्रे न करें।");

    }

    if (current.relative_humidity_2m >= 85) {

        advice.push("🌿 रोग लगने की संभावना बढ़ सकती है।");

    }

    if (rain >= 70) {

        advice.push("🌧 बारिश की संभावना अधिक है।");

        advice.push("🚫 आज खाद या स्प्रे न करें।");

    }

    if (advice.length === 0) {

        advice.push("✅ मौसम खेती के लिए सामान्य है।");

    }

    return advice;

}

// ======================================================
// Format Time
// ======================================================

function formatTime(dateString) {

    return new Date(dateString).toLocaleTimeString(

        "en-IN",

        {

            hour: "2-digit",

            minute: "2-digit"

        }

    );

}

// ======================================================
// Weather Alerts
// ======================================================

function getWeatherAlert(current, daily) {

    const alerts = [];

    if (current.temperature_2m >= 42) {

        alerts.push("🔥 Heat Wave Alert");

    }

    if (current.wind_speed_10m >= 40) {

        alerts.push("💨 Strong Wind Alert");

    }

    if (daily.precipitation_probability_max[0] >= 80) {

        alerts.push("🌧 Heavy Rain Alert");

    }

    return alerts;

}

// ======================================================
// PART 5
// Weather Details + Forecast UI
// ======================================================

function createForecastCard(day, icon, max, min, rain) {

    return `

        <div class="forecast-item">

            <div class="forecast-day">
                ${day}
            </div>

            <div class="forecast-icon">
                ${icon}
            </div>

            <div class="forecast-temp">
                ${max}° / ${min}°
            </div>

            <div class="forecast-rain">
                🌧 ${rain}%
            </div>

        </div>

    `;

}

function buildForecast(daily) {

    let html = "";

    for (let i = 0; i < daily.time.length; i++) {

        const day = new Date(daily.time[i])
            .toLocaleDateString(
                "en-US",
                {
                    weekday: "short"
                }
            );

        html += createForecastCard(

            day,

            getWeatherIcon(
                daily.weather_code[i],
                true
            ),

            daily.temperature_2m_max[i],

            daily.temperature_2m_min[i],

            daily.precipitation_probability_max[i]

        );

    }

    return html;

}

function renderWeather(city, weather) {

    const current = weather.current;

    const daily = weather.daily;

    const icon = getWeatherIcon(

        current.weather_code,

        current.is_day

    );

    const advice = getFarmingAdvice(

        current,

        daily

    );

    const alerts = getWeatherAlert(

        current,

        daily

    );

    const forecastHTML = buildForecast(daily);

    weatherContainer.innerHTML = `

<div class="weather-card">

<div class="weather-header">

<div class="weather-main-icon">

${icon}

</div>

<div>

<h1>

${current.temperature_2m}°C

</h1>

<h3>

📍 ${city}

</h3>

</div>

</div>

<div class="weather-grid">

<div class="weather-box">

<span>🌡 Feels Like</span>

<strong>

${current.apparent_temperature}°C

</strong>

</div>

<div class="weather-box">

<span>💧 Humidity</span>

<strong>

${current.relative_humidity_2m}%

</strong>

</div>

<div class="weather-box">

<span>💨 Wind</span>

<strong>

${current.wind_speed_10m} km/h

</strong>

</div>

<div class="weather-box">

<span>🌡 Pressure</span>

<strong>

${current.pressure_msl} hPa

</strong>

</div>

<div class="weather-box">

<span>🌅 Sunrise</span>

<strong>

${formatTime(daily.sunrise[0])}

</strong>

</div>

<div class="weather-box">

<span>🌇 Sunset</span>

<strong>

${formatTime(daily.sunset[0])}

</strong>

</div>

</div>

${alerts.length ? `

<div class="weather-alert">

<h3>

⚠ Weather Alerts

</h3>

<ul>

${alerts.map(a => `<li>${a}</li>`).join("")}

</ul>

</div>

` : ""}

<div class="weather-advice">

<h3>

🌾 Smart Farming Advice

</h3>

<ul>

${advice.map(a => `<li>${a}</li>`).join("")}

</ul>

</div>

</div>

<div class="forecast-card">

<h3>

📅 7 Day Forecast

</h3>

<div class="forecast-list">

${forecastHTML}

</div>

</div>

`;

}

// ======================================================
// PART 6 (FINAL)
// Error Screen + Retry
// ======================================================

function showError(error = "") {

    console.error(error);

    weatherContainer.innerHTML = `

    <div class="weather-error">

        <div style="font-size:70px;">
            🌩️
        </div>

        <h2>
            Weather Not Available
        </h2>

        <p>

            Please allow Location Permission
            and check your Internet connection.

        </p>

        <button class="btn" id="retryWeather">

            🔄 Retry

        </button>

    </div>

    `;

    document
        .getElementById("retryWeather")
        .addEventListener("click", loadWeather);

}

// ======================================================
// Loading
// ======================================================

function showLoading() {

    weatherContainer.innerHTML = `

    <div class="weather-loading">

        <div class="loader"></div>

        <h3>

            Loading Live Weather...

        </h3>

    </div>

    `;

}

// ======================================================
// Refresh Every 15 Minutes
// ======================================================

setInterval(() => {

    loadWeather();

}, 900000);

// ======================================================
// Start
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

    loadWeather();

});