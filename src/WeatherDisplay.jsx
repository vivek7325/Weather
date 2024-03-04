import React from 'react';

const WeatherDisplay = ({data}) => {

    let weatherData = {
      CityName: data.name,
      Weathericon: data.weather[0].icon,
      WeatherStatus: data.weather[0].main,
      Humidity: data.main.humidity,
      Temperature: data.main.temp,
      Visibility: data.visibility,
    };
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    weatherData.SunriseTime = `${sunrise}`;
    weatherData.SunsetTime = `${sunset}`;
    const iconUrl = `http://openweathermap.org/img/w/${weatherData.Weathericon}.png`;

    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h2 className="city-name">{weatherData.CityName}</h2>
            <img src={iconUrl} alt="Weather Icon" className="weather-icon" />
            <p><span className="temperature">{weatherData.Temperature}</span> °C</p>
            <p className="weather-status">{weatherData.WeatherStatus}</p>
          </div>
          <ul className="weather-details">
            <li>
              <i className="fas fa-tint weather-icon"></i>
              Humidity: {weatherData.Humidity}%
            </li>
            <li>
              <i className="fas fa-eye weather-icon"></i>
              Visibility: {weatherData.Visibility} meters
            </li>
            <li>
              <i className="fas fa-sun weather-icon"></i>
              Sunrise Time: {weatherData.SunriseTime}
            </li>
            <li>
              <i className="fas fa-sunset weather-icon"></i>
              Sunset Time: {weatherData.SunsetTime}
            </li>
          </ul>
        </div>
      </div>
    );
};


export default WeatherDisplay;
