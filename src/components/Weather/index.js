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
import WeatherElement from '../WeatherElement/WeatherElement';

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

  const dateInfo = new Date();
  const currentDate = dateInfo.toLocaleDateString('en-GB', {
    year: 'numeric', month: 'short', day: 'numeric',
  });

  const currentTime = dateInfo.toLocaleTimeString('en-GB', {
    hour: '2-digit', minute: '2-digit',
  });

  const dayTime =
      timeStampToHours(sunset) > timeStampToHours(dt)
      &&
      timeStampToHours(dt) > timeStampToHours(sunrise);

  const sunriseValue = timeStampConverter(sunrise);
  const sunsetValue = timeStampConverter(sunset);

  const weatherCardStyles = cx({
    'imageWeather': true,
    'rain': pops === 'Rain',
    'clearDay': dayTime && pops === 'Clear',
    'clearNight': !dayTime && pops === 'Clear',
    'clouds': pops === 'Clouds',
    'mist': pops === 'Mist',
  });

  const uvText = 'Ultraviolet index. If more than 3 - could be risky for skin';

  return (

      <div className={styles.weatherWrapper}>
        {/*<img className={styles.imageWeather} src={rainImg} />*/}
        <div className={styles.weatherContent}>
          <div className={styles.leftSide}>
            {temperature && (
                <div className={styles.temperature}>
                  <span>{`${temperature}`}</span>
                  <sup>°</sup>
                </div>
            )}

            <WeatherElement name={currentDate} value={currentTime}/>
            <WeatherElement name={'Sunrise'} value={sunriseValue}/>
            <WeatherElement name={'Sunset'} value={sunsetValue}/>
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
              {/*<WeatherElement name={'Pops'} value={pops} nameSize={27}/>*/}
              <WeatherElement
                  name={'Pressure'}
                  value={pressure}
                  suffix={'mmPa'}
                  nameSize={24}
              />
              <WeatherElement
                  name={'Humidity'}
                  value={humidity}
                  suffix={'%'}
                  nameSize={24}
              />
              <WeatherElement
                  name={'UV index'}
                  value={UVI}
                  nameSize={24}
              />
              <WeatherElement
                  name={'Wind'}
                  value={wind}
                  suffix={'m/s'}
                  nameSize={24}
              />
            </div>
          </div>
        </div>


        <div className={styles.hourlyForecast}>
          <HourlyForecastRenderer forecast={hourlyWeather}/>
        </div>



      </div>

  );
};

export default React.memo(Weather);
