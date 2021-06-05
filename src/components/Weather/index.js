import React, {useEffect} from 'react';

import styles from './styles.module.scss';
import Loader from '../Loader';
import className from 'classnames/bind';
import useWeather from '../../hooks/useWeather';
import Humidity from '../Icons/Humidity/Humidity';
import Wind from '../Icons/Wind/Wind';
import Pressure from '../Icons/Pressure/Pressure';
import GeoPointIcon from '../Icons/GeoPoint/GeoPoint';
import Sunrise from '../Icons/Sunrise/Sunrise';
import Sunset from '../Icons/Sunset/Sunset';
import UV from '../Icons/UV/UV';
import HourlyForecastRenderer
  from '../HourlyCardsRenderer/HourlyForecastRenderer';
import {timeStampConverter, timeStampToHours} from '../../helpers/helper';

const Weather = () => {

  const {
    loading,
    cityName,
    getLocation,
    hourlyWeather,
    currentWeather: {
      dt,
      accuracy,
      feelsLike,
      icon,
      temperature,
      pops,
      humidity,
      pressure,
      wind,
      sunrise,
      sunset,
      UVI,
    },
  } = useWeather();

  useEffect(() => getLocation(), []);

  const cx = className.bind(styles);

  const dayTime =
      timeStampToHours(sunset) > timeStampToHours(dt)
      &&
      timeStampToHours(dt) > timeStampToHours(sunrise);

  const sunriseValue = timeStampConverter(sunrise);
  const sunsetValue = timeStampConverter(sunset);

  const weatherCardStyles = cx({
    'imageWeather': true,
    'rain': pops === 'Rain',
    'clearDay': pops === 'Clear' && dayTime,
    'clearNight': pops === 'Clear',
    'clouds': pops === 'Clouds',
    'mist': pops === 'Mist',
  });

  const uvText = 'Ultraviolet index. If more than 3 - could be risky for skin';

  return (
      <div className={styles.wrapper}>
        <div className={weatherCardStyles}>
          <div className={styles.content}>
            {temperature && (
                <div className={styles.temperature}>
                  <span className={styles.tempValue}>{temperature}</span>
                  <span className={styles.tempText}>feels like</span>
                  <span className={styles.tempValue}>{feelsLike}</span>
                </div>
            )}
            <div className={styles.city}>
              <GeoPointIcon/><span> {cityName} </span> (~{accuracy} m.)
            </div>
            <div className={styles.optional}>
              <div className={styles.value}>
                <Sunrise/> <span>{sunriseValue}</span>
              </div>
              <div className={styles.value}>
                <Sunset/> <span>{sunsetValue}</span>
              </div>
            </div>
            <div className={styles.iconAndState}>
              <div className={styles.icon}>
                {icon ? <img src={icon} alt="weather icon"/> : '🙄'}
              </div>
              <div className={styles.pops}>
                {pops}
              </div>
              <UV/>
              <div className={styles.pops}>
                <abbr title={uvText}>
                  {UVI}
                </abbr>
              </div>
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
        </div>
      </div>
  );
};

export default React.memo(Weather);

