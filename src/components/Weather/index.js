import React from 'react';

import styles from './styles.module.scss';
import Loader from '../Loader';
import UseWeather from '../../hooks/useWeather';
import Humidity from '../Icons/Humidity/Humidity';
import Wind from '../Icons/Wind/Wind';
import Pressure from '../Icons/Pressure/Pressure';
import GeoPointIcon from '../Icons/GeoPoint/GeoPoint';
import Sunrise from '../Icons/Sunrise/Sunrise';
import Sunset from '../Icons/Sunset/Sunset';
import UV from '../Icons/UV/UV';
import HourlyForecastRenderer
  from '../HourlyCardsRenderer/HourlyForecastRenderer';

const Weather = () => {

  const {
    currentWeather: {
      accuracy,
      feelsLike,
      icon,
      temperature,
      clouds,
      humidity,
      pressure,
      wind,
      windAngle,
      sunrise,
      sunset,
      UVI,
    },
    hourlyWeather,
    loading,
    cityName,
  } = UseWeather();

  return (
      <div className={styles.wrapper}>
        <div className={styles.temperature}>
          <span className={styles.tempValue}>{temperature}</span>
          <span className={styles.tempText}>feels like</span>
          <span className={styles.tempValue}>
            {feelsLike}
          </span>
        </div>
        <div className={styles.city}>
          <GeoPointIcon/><span>{cityName}</span> (~{accuracy} m.)
        </div>
        <div className={styles.optional}>
          <div className={styles.value}>
            <Sunrise/> <span>{sunrise}</span>
          </div>
          <div className={styles.value}>
            <Sunset/> <span>{sunset}</span>
          </div>
        </div>
        <div className={styles.iconAndState}>
          <div className={styles.icon}>
            {icon ? <img src={icon} alt="weather icon"/> : '🙄'}
          </div>
          <div className={styles.clouds}>
            {clouds}
          </div>
          <UV/>
          <div className={styles.clouds}>{UVI}</div>
        </div>

        {loading ? <Loader/> : (
            <div className={styles.optional}>
              <div className={styles.value}>
                <Humidity/> <span>{humidity}</span>%
              </div>
              <div className={styles.value}>
                <Pressure/><span>{pressure}</span>
              </div>
              <div className={styles.value}>
                <Wind/><span>{wind}</span>m/s
              </div>
            </div>
        )}
        <div className={styles.hourlyForecast}>
          <HourlyForecastRenderer forecast={hourlyWeather}/>
        </div>
      </div>
  );
};

export default Weather;
