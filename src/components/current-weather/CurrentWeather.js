import "./currentWeather.css";

const CurrentWeather = ({ data }) => {
  const IMG_URL =
    "https://raw.githubusercontent.com/bobangajicsm/react-weather-app/main/public/icons";

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-decription">{data.weather[0].description}</p>
        </div>
        <p className="temperature">{Math.round(data.main.temp)}°</p>
        <img
          src={`${IMG_URL}/${data.weather[0].icon}.png`}
          alt="weather-icon"
          className="weather-icon"
        />
      </div>

      <div className="bottom">
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity} %</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
