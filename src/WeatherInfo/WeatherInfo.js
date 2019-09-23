import React, { useState } from "react";
import "./WeatherInfo.css";
import { Tooltip } from "@material-ui/core";

const WeatherInfo = ({ city, country, temp, sunrise, sunset, pressure }) => {
  const [cels, setCels] = useState(true);

  return city ? (
    <div className="weather-info">
      <p className="weather__desc">
        <span className="weather__value">Город: </span>
        <span className="weather__value">
          {city} {country}
        </span>
      </p>
      <p className="weather__desc">
        <span className="weather__value">Температура:</span>
        <Tooltip title="Change value" placement="right">
          <span className="weather__value" style={{ cursor: "pointer" }} onClick={() => setCels(!cels)}>
            {cels ? temp : Math.floor((temp * 9) / 5 + 32)} <span>{cels ? "C" : "F"}</span>
          </span>
        </Tooltip>
      </p>
      <p className="weather__desc">
        <span className="weather__value">Восход солнца:</span>
        <span className="weather__value">{sunrise}</span>
      </p>
      <p className="weather__desc">
        <span className="weather__value">Заход солнца:</span>
        <span className="weather__value">{sunset}</span>
      </p>
      <p className="weather__desc">
        <span className="weather__value">Давление:</span>
        <span className="weather__value">{pressure}</span>
      </p>
    </div>
  ) : (
    <div className="weather-info">
      <p className="weather__desc">Введите город :)</p>
    </div>
  );
};
export default WeatherInfo;
