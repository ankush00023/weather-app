// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=54f19d5a660f53a1c9a42a080c49ba4a
import { useEffect, useState } from "react";
import "./Weather.css";
import Weathercard from "./Weathercard";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("Chandigarh");
  const [tempInfo, setTempInfo] = useState({});
  const getWeatherInfoFromApi = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=54f19d5a660f53a1c9a42a080c49ba4a`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { icon: weatherIcon } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
        weatherIcon,
      };
      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeatherInfoFromApi();
  }, []);
  return (
    <>
      {/* Search Bar */}
      <div className="container-fluid">
        <div className="row justify-content-center mt-3">
          <div className="col-md-8">
            <div className="input-group mb-3 ">
              <input
                type="text"
                className="form-control"
                placeholder="Search...."
                aria-label="Search"
                aria-describedby="button-addon2"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
                onClick={getWeatherInfoFromApi}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Weather-Card */}
      <Weathercard tempInfo={tempInfo} />
    </>
  );
};

export default Weather;
