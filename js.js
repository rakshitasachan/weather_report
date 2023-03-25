function renderWeather(weather){
    console.log(weather);

var resultsContainer=document.querySelector("#weather.results");
var $city=document.createElement("h2");
$city.textContent=weather.name;
resultsContainer+$city;

var $temp=document.createElement("p");
$temp.textContent="Temp: "+weather.main.temp+"p";
resultsContainer+$temp;

var $humidity=document.createElement("p");
$humidity.textContent="humidity: "+weather.main.humidity+"%";
resultsContainer+$humidity;

var $wind=document.createElement("p");
$wind.textContent="Wind: "+weather.wind.speed+"mph,"+weather.wind.deg+"°";
resultsContainer+$wind;


}

function fetchWeather(query){
   // 
    var url="https://api.openweathermap.org/data/2.5/weather?q=london&appid=66bfb8b095fdb932234e0a92436a0a23";
    fetch(url)
    .then((response) => response.json())
    //.then((data) => renderWeather(data));
    .then((data)=>{document.getElementById("weather-results").textContent= data.main.temp- 273.15+'°C';
});
}
fetchWeather();