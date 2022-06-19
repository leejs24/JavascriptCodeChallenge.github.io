const API_KEY = "eb27994c7c21beecb35bee3ba5ad3b59";


function onGeoOK(postion){
    const lat = postion.coords.latitude;
    const lng = postion.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`
fetch(url)
.then(Response => Response.json())
.then(data => {
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} - ${data.main.temp}`;
});
}

function onGeoError() {
    alert("no")
}
navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

