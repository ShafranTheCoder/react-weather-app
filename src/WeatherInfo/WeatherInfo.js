import React from "react";
import "./WeatherInfo.css";

const WeatherInfo = ({ city, country, temp, sunrise, sunset, pressure }) => {
  return (
    <div className="weather-info">
      <p className="weather__desc">
        Город:
        <span className="weather__value">
          {city}, {country}
        </span>
      </p>
      <p className="weather__desc">
        Температура: <span className="weather__value">{temp}</span>
      </p>
      <p className="weather__desc">
        Восход солнца: <span className="weather__value">{sunrise}</span>
      </p>
      <p className="weather__desc">
        Заход солнца: <span className="weather__value">{sunset}</span>
      </p>
      <p className="weather__desc">
        Давление: <span className="weather__value">{pressure}</span>
      </p>
    </div>
  );
};
export default WeatherInfo;
