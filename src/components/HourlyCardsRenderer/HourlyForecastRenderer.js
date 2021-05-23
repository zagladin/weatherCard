import React from 'react';
import HourlyWeatherCard from '../HourlyWeatherCard/HourlyWeatherCard';

const HourlyForecastRenderer = ({forecast}) =>
    forecast?.map(forecast => {
      const iconUrl = `http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;

      return (
          <div key={forecast.dt}>
            <HourlyWeatherCard dateTime={forecast.dt}
                               temperature={forecast.temp.toFixed(1)}
                               feelsTemp={forecast.feels_like.toFixed(1)}
                               pops={forecast.weather[0].main}
                               wind={forecast.wind_speed}
                               icon={iconUrl}
                               uvindex={forecast.uvi}/>
          </div>
      );
    });

export default React.memo(HourlyForecastRenderer);
