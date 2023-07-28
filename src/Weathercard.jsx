// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Weathercard = ({ tempInfo }) => {
  const [wetherState, setWeatherState] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
    weatherIcon,
  } = tempInfo;
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;

        case "Thunderstorm":
          setWeatherState("wi-thunderstorm");
          break;

        case "Drizzle":
          setWeatherState("wi-raindrops");
          break;

        case "Rain":
          setWeatherState("wi-rain");
          break;

        case "Snow":
          setWeatherState("wi-snow");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  //   Convering the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()} :${date.getMinutes()} PM`;
  return (
    <>
      <div className="container border p-4 mt-3">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <p className="text-center" id="cloudIcon">
              {/* <img
                className="img-fluid"
                src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
                alt="weather img"
              /> */}
              <i className={`wi ${wetherState}`}></i>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 bg-dark">
            <p className="text-center text-light" id="tempValue">
              {temp} &deg;
            </p>
          </div>
          <div className="col-md-6 bg-dark">
            <p className="text-center text-light" id="cloudtext">
              {weathermood}
              <p className="text-center fs-6 text text-light">
                {name}, {country}
              </p>
            </p>
          </div>
          <div className="col-md-3 bg-warning">
            <p className="text-center fs-1 text text-light lh-5">
              {new Date().toLocaleString()}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 bg-success">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-around mt-3">
                <p className="fs-5 text text-light">
                  <i className={"wi wi-day-cloudy"}></i>
                </p>
                <p className="fs-5 text text-light">{timeStr}</p>
                <p className="fs-5 text text-light">Sunset</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 bg-primary">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-around mt-3">
                <p className="fs-5 text text-light">
                  <i className={"wi wi-humidity"}></i>
                </p>
                <p className="fs-5 text text-light"> {humidity}</p>
                <p className="fs-5 text text-light">Humidity</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 bg-danger">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-around mt-3">
                <p className="fs-5 text text-light">
                  <i className={"wi wi-rain"}></i>
                </p>
                <p className="fs-5 text text-light">Pressure </p>
                <p className="fs-5 text text-light">{pressure}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 bg-secondary">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-around mt-3">
                <p className="fs-5 text text-light">
                  <i className={"wi wi-strong-wind"}></i>
                </p>
                <p className="fs-5 text text-light">Wind</p>
                <p className="fs-5 text text-light">{speed}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weathercard;
