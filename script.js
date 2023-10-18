const apiKey = "43b7705f9e55282b3f827d209fbf5d9f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=lagos";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
}