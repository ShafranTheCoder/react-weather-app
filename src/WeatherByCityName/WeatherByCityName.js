import React, { Component } from "react";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import Loading from "../Loading/Loading";

const API_KEY = "ec6299bae46d282119b52a4ef05c9501";

class WeatherByCityName extends Component {
  state = {
    inputValue: undefined,
    allValues: {
      temp: undefined,
      city: this.props.city,
      humidity: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      pressure: undefined,
      error: undefined,
      status: false
    }
  };

  componentDidMount() {
    this.getWeather();
  }

  getWeather = () => {
    console.log(this.state);
    let city = this.state.allValues.city;
    console.log(this.state.allValues.city);

    const api_url = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(data => {
        console.log(data, "NEW API!!!!!");
        /*SUNSET CALCULATING */
        let sunset = data.sys.sunset;
        var sunsetDate = new Date(sunset * 1000);
        // Hours part from the timestamp
        var sunsetHours = sunsetDate.getHours();
        // Minutes part from the timestamp
        var sunsetMinutes = "0" + sunsetDate.getMinutes();
        // Seconds part from the timestamp
        var sunsetSeconds = "0" + sunsetDate.getSeconds();
        var sunsetDate = sunsetHours + ":" + sunsetMinutes.substr(-2);

        /*SUNRISE CALCULATING */
        let sunrise = data.sys.sunrise;
        var sunriseDate = new Date(sunrise * 1000);
        // Hours part from the timestamp
        var sunriseHours = sunriseDate.getHours();
        // Minutes part from the timestamp
        var sunriseMinutes = "0" + sunriseDate.getMinutes();
        // Seconds part from the timestamp
        var sunriseSeconds = "0" + sunriseDate.getSeconds();
        var sunriseDate = sunriseHours + ":" + sunriseMinutes.substr(-2);

        this.setState({
          allValues: {
            temp: data.main.temp,
            city: data.name,
            humidity: data.main.humidity,
            country: data.sys.country,
            sunrise: sunriseDate,
            sunset: sunsetDate,
            pressure: data.main.pressure,
            weatherDesc: data.weather[0].description,
            error: undefined,
            status: true
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return this.state.allValues.status ? (
      <div>
        <WeatherInfo
          temp={this.state.allValues.temp}
          city={this.state.allValues.city}
          humidity={this.state.allValues.humidity}
          country={this.state.allValues.country}
          sunrise={this.state.allValues.sunrise}
          sunset={this.state.allValues.sunset}
          pressure={this.state.allValues.pressure}
          weatherDesc={this.state.allValues.weatherDesc}
          error={this.state.allValues.error}
        />
      </div>
    ) : (
      <div>
        <Loading></Loading>
      </div>
    );
  }
}

export default WeatherByCityName;
