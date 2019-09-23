import React, { Component } from "react";
import "./App.css";
import SignInSide from "./SignInSide/SignInSide";

const API_KEY = "ec6299bae46d282119b52a4ef05c9501";

class App extends Component {
  state = {
    inputValue: undefined,
    isChecked: false,
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    error: undefined
  };
  gettingWeather = async e => {
    let city = this.state.inputValue;
    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: sunset_date,
        pressure: data.main.pressure,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        pressure: undefined,
        error: "Введите название города!"
      });
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      inputValue: event.target.city.value,
      isChecked: event.target.remember.value
    });
    this.gettingWeather();
    console.log(event.target.city.value);
    console.log(event.target.remember.value);
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
          handleSubmit={this.handleSubmit}
          checked={this.state.isChecked}
          changed={this.toggleChange}
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          sunset={this.state.sunset}
          pressure={this.state.pressure}
          error={this.state.error}
        ></SignInSide>
      </div>
    );
  }
}

export default App;
