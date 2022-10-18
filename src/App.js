import "./styles.css";
import Search from "./components/search/Search";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";
import ForecastWeather from "./components/forecast-weather/ForecastWeather";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState();

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const currentWeatherResponse = await response[0].json();
        const forecastWeatherResponse = await response[1].json();

        setCurrentWeather({
          city: searchData.label,
          ...currentWeatherResponse
        });

        setForecastWeather({
          city: searchData.label,
          ...forecastWeatherResponse
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <div style={{ width: "60%", margin: "20px auto" }}>
        <Search onSearchChange={handleOnSearchChange} />
      </div>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <ForecastWeather data={forecastWeather} />}
    </div>
  );
};

export default App;
