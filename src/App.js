import React, { Component } from "react";
import "./App.css";
import SignInSide from "./SignInSide/SignInSide";

const API_KEY = "ec6299bae46d282119b52a4ef05c9501";

class App extends Component {
  state = {
    inputValue: undefined,
    isChecked: false,
    allValues: {
      temp: undefined,
      city: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      pressure: undefined,
      error: undefined
    }
  };

  gettingWeather = async e => {
    e.preventDefault();
    let city = e.target.city.value;
    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      console.log(data.sys.sunset);
      console.log(data);

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

      let sunrise = data.sys.sunrise;
      var sunriseDate = new Date(sunrise * 1000);
      // Hours part from the timestamp
      var sunriseHours = sunriseDate.getHours();
      // Minutes part from the timestamp
      var sunriseMinutes = "0" + sunriseDate.getMinutes();
      // Seconds part from the timestamp
      var sunriseSeconds = "0" + sunriseDate.getSeconds();
      var sunriseDate = sunriseHours + ":" + sunriseMinutes.substr(-2);

      /*SUNRISE CALCULATING */

      this.setState({
        allValues: {
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          sunrise: sunriseDate,
          sunset: sunsetDate,
          pressure: data.main.pressure,
          error: undefined
        }
      });
    } else {
      this.setState({
        allValues: {
          error: "Введите название города!"
        }
      });
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      inputValue: event.target.city.value,
      isChecked: event.target.remember.value
    });
  };
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };
  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <SignInSide
          handleSubmit={this.gettingWeather}
          checked={this.state.isChecked}
          allValues={this.state.allValues}
          changed={this.toggleChange}
        ></SignInSide>
      </div>
    );
  }
}

export default App;
