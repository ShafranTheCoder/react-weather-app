import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./MainPage.css";
import WeatherByCityName from "../WeatherByCityName/WeatherByCityName";

/*url(https://source.unsplash.com/featured/?kiev,city) */

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "linear-gradient(to bottom, #c94b4b, #4b134f)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    padding: "8px 0"
  }
}));

const MainPage = ({ handleSubmit, checked, changed, allValues }) => {
  const classes = useStyles();
  const { temp, city, humidity, country, sunrise, sunset, pressure, weatherDesc, error } = allValues;
  console.log(allValues, "mainpage");
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <div className="route__links">
          <Router>
            <div className="links">
              <ul>
                <li>
                  <Link style={{ color: "white", textDecoration: "none" }} to="/">
                    Выбрать город
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white", textDecoration: "none" }} to="/kiev">
                    Kiev
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white", textDecoration: "none" }} to="/moscow">
                    Moscow
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white", textDecoration: "none" }} to="/new york">
                    New York
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white", textDecoration: "none" }} to="/riga">
                    Riga
                  </Link>
                </li>
                <li>
                  <Link style={{ color: "white", textDecoration: "none" }} to="/lviv">
                    Lviv
                  </Link>
                  <li>
                    <Link style={{ color: "white", textDecoration: "none" }} to="/medellín">
                      Medellín
                    </Link>
                  </li>
                </li>
              </ul>
            </div>
            <Route
              exact
              path="/"
              render={() => (
                <WeatherInfo
                  temp={temp}
                  city={city}
                  humidity={humidity}
                  country={country}
                  sunrise={sunrise}
                  sunset={sunset}
                  pressure={pressure}
                  weatherDesc={weatherDesc}
                  error={error}
                />
              )}
            />
            <Route path="/kiev" render={() => <WeatherByCityName city="kiev" />} />
            <Route path="/moscow" render={() => <WeatherByCityName city="moscow" />} />
            <Route path="/new york" render={() => <WeatherByCityName city="new york" />} />
            <Route path="/riga" render={() => <WeatherByCityName city="riga" />} />
            <Route path="/lviv" render={() => <WeatherByCityName city="lviv" />} />
            <Route path="/medellín" render={() => <WeatherByCityName city="medellín" />} />
          </Router>
        </div>
        {/* <WeatherInfo
          temp={temp}
          city={city}
          humidity={humidity}
          country={country}
          sunrise={sunrise}
          sunset={sunset}
          pressure={pressure}
          weatherDesc={weatherDesc}
          error={error}
        ></WeatherInfo> */}
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FilterVintageIcon></FilterVintageIcon>
          </Avatar>
          <Typography component="h1" variant="h5">
            Weather App
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="city"
              label="City"
              name="city"
              autoComplete="city"
              autoFocus
            />
            <FormControlLabel
              control={<Checkbox value={checked} id="remember" onChange={changed} color="primary" />}
              label="Save city"
            />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Search
            </Button>

            <Box mt={5}>
              <p style={{ textAlign: "center" }}>
                Made with <span style={{ color: "#e25555", fontSize: "18px" }}>❤</span> by Dmitry Bogutskii
              </p>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};
export default MainPage;
