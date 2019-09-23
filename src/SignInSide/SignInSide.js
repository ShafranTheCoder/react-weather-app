import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import FavoriteIcon from "@material-ui/icons/Favorite";

/*url(https://source.unsplash.com/featured/?kiev,city) */

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "linear-gradient(to bottom, #c94b4b, #4b134f)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
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

const SignInSide = ({ handleSubmit, checked, changed, temp, city, country, sunrise, sunset, pressure, error }) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <WeatherInfo
          temp={temp}
          city={city}
          country={country}
          sunrise={sunrise}
          sunset={sunset}
          pressure={pressure}
          error={error}
        ></WeatherInfo>
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
export default SignInSide;
