import React, { Component } from "react";
import "./App.css";
import MainPage from "./MainPage/MainPage";

const API_KEY = "ec6299bae46d282119b52a4ef05c9501";

class App extends Component {
  state = {
    inputValue: undefined,
    isChecked: false,
    currentCount: 10,
    allValues: {
      temp: undefined,
      city: undefined,
      humidity: undefined,
      country: undefined,
      sunrise: undefined,
      sunset: undefined,
      pressure: undefined,
      error: undefined
    }
  };

  timer() {
    //setInterval(this.gettingWeather, 5000);
  }

  //clearInterval(this.intervalId);

  gettingWeather = async e => {
    if (e) {
      e.preventDefault();
      var city = e.target.city.value;
    }
    console.log(city);
    if (city) {
      await this.setState({ inputValue: city });
      this.timer();
      console.log("works");
    }
    if (this.state.inputValue !== undefined) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${API_KEY}&units=metric`
      )
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
              error: undefined
            }
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({
        allValues: {
          error: "Введите название города!"
        }
      });
    }
  };
  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.setState({
  //     inputValue: event.target.city.value,
  //     isChecked: event.target.remember.value
  //   });
  // };
  // toggleChange = () => {
  //   this.setState({
  //     isChecked: !this.state.isChecked
  //   });
  // };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <MainPage
          handleSubmit={this.gettingWeather}
          checked={this.state.isChecked}
          allValues={this.state.allValues}
          changed={this.toggleChange}
        ></MainPage>
      </div>
    );
  }
}

export default App;
