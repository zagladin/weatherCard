import React from 'react';
import HourlyWeatherCard from '../HourlyWeatherCard/HourlyWeatherCard';

const HourlyForecastRenderer = ({ forecast }) => forecast?.map((data) => {
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  return (
    <div key={data.dt}>
      <HourlyWeatherCard
        dateTime={data.dt}
        temperature={data.temp.toFixed(1)}
        feelsTemp={data.feels_like.toFixed(1)}
        pops={data.weather[0].main}
        wind={data.wind_speed}
        icon={iconUrl}
        uvindex={data.uvi}
      />
    </div>
  );
});

export default React.memo(HourlyForecastRenderer);
