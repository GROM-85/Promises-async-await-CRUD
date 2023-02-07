import { format } from "date-fns";

export const makeMarkup = (data) => {
    const {name} = data;
    const {temp,feels_like,humidity} = data.main;
    const {country,sunrise,sunset} = data.sys;
    const {description, icon} = data.weather[0];
    const {speed} = data.wind;

    let sunriseTime = format(new Date(sunrise * 1000),'HH:mm');
    let sunsetTime = format(new Date(sunset * 1000),'HH:mm');
    console.log(sunriseTime)
    console.log(sunsetTime)

    return ` <div class="weather">
    <h2 class="city">Weather in ${name}, ${country}</h2>
    <h1 class="temp">${Math.floor(temp)}°C</h1>
    <div class="flex">
      <img src="https://openweathermap.org/img/wn/${icon}.png" alt="" class="icon" />
      <div class="description">${description}</div>
    </div>
    <div class="feels_like">Feels like: ${Math.floor(feels_like)}°C</div>
    <div class="humidity">Humidity: ${humidity}%</div>
    <div class="wind">Wind speed: ${speed} km/h</div>
    <div class="sunrise">Sunrise: ${sunriseTime}</div>
    <div class="sunset">Sunset: ${sunsetTime}</div>
  </div>`;

}