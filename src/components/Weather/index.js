import React, { useEffect } from 'react';

import styles from './styles.module.scss';
import useWeather from '../../hooks/useWeather';
import HourlyForecastRenderer
  from '../HourlyCardsRenderer/HourlyForecastRenderer';
import { timeStampConverter } from '../../helpers/helper';
import WeatherElement from '../WeatherElement/WeatherElement';
import Loader from '../Loader/Loader';

const Weather = () => {
  const {
    loading = true,
    cityName,
    getLocation,
    hourlyWeather,
    currentWeather: {
      accuracy,
      temperature,
      humidity,
      pressure,
      wind,
      sunrise,
      sunset,
      UVI,
    },
  } = useWeather();

  useEffect(() => getLocation(), []);

  const dateInfo = new Date();
  const currentDate = dateInfo.toLocaleDateString('en-GB', {
    year: 'numeric', month: 'short', day: 'numeric',
  });

  const currentTime = dateInfo.toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit',
  });

  const sunriseValue = timeStampConverter(sunrise);
  const sunsetValue = timeStampConverter(sunset);

  return (
    <div className={styles.weatherWrapper}>
      {!loading
        ? (
          <>
            <div className={styles.weatherContent}>
              <div className={styles.leftSide}>
                {temperature && (
                  <div className={styles.temperature}>
                    <span>{`${temperature}`}</span>
                    <sup>°</sup>
                  </div>
                )}

                <WeatherElement name={currentDate} value={currentTime} />
                <WeatherElement name="Sunrise" value={sunriseValue} />
                <WeatherElement name="Sunset" value={sunsetValue} />
              </div>

              <div className={styles.rightSide}>
                <div className={styles.rightSideTop}>
                  <span>
                    {cityName}
                  </span>
                  <span>
                    {`accuracy ~ ${accuracy} m.`}
                  </span>
                </div>
                <div className={styles.rightSideBottom}>
                  <WeatherElement
                    name="Pressure"
                    value={pressure}
                    suffix="mmPa"
                    nameSize={24}
                  />
                  <WeatherElement
                    name="Humidity"
                    value={humidity}
                    suffix="%"
                    nameSize={24}
                  />
                  <WeatherElement
                    name="UV index"
                    value={UVI}
                    nameSize={24}
                  />
                  <WeatherElement
                    name="Wind"
                    value={wind}
                    suffix="m/s"
                    nameSize={24}
                  />
                </div>
              </div>
            </div>
            <div className={styles.hourlyForecast}>
              <HourlyForecastRenderer forecast={hourlyWeather} />
            </div>
          </>
        )
        : (
          <Loader />
        )}
    </div>
  );
};

export default React.memo(Weather);
