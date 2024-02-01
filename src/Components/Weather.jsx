import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=indore&appid=9be4f13b18b8324410ad0b9eb7238a20"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : weather ? (
        <div>
          <p>Weather: {weather.weather[0].main}</p>
          <p>Temperature: {weather.main.temp} F</p>
          <p>Pressure: {weather.main.pressure} mbar</p>
          <p>Wind Speed: {weather.wind.speed} Km/h</p>
          <p>humidity: {weather.main.humidity} %</p>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Weather;
