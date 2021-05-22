import {useCallback, useEffect, useState} from 'react';
import {getCityName, getWeather} from '../api/api';
import {timeStampConverter, timeStampToHours} from '../helpers/helper';

export default function UseWeather() {
  const [loading, setLoading] = useState(false);

  const [cityName, setCityName] = useState('');
  const [currentWeather, setCurrentWeather] = useState({
    temperature: '',
    humidity: '',
    pressure: '',
    clouds: '',
    accuracy: '',
    icon: '',
    UVI: '',
    wind: '',
    windAngle: '',
    feelsLike: '',
    sunrise: '',
    sunset: ''
  });

  const [hourlyWeather, setHourlyWeather] = useState([]);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      const options = {
        maximumAge: 7200000,
        enableHighAccuracy: true,
      };
      navigator.geolocation.getCurrentPosition(handleLocation, errorHandler,
          options);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleLocation = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    weatherProcessing(latitude, longitude, accuracy);
  };

  const weatherProcessing = (latitude, longitude, accuracy) => {

    setCurrentWeather(prevState => (
        {
          ...prevState,
          accuracy,
        }));

    setLoading(true);


    getCityName(latitude, longitude)
    .then(res => setCityName(res[0].name))
    .catch(err => console.warn('Cannot get location info! ', err));

    getWeather(latitude, longitude)
    .then(res => {
      const responseData = res.current;

      const iconTag = responseData.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconTag}.png`;
      const pressureToMmHG = responseData.pressure * 0.75;
      const cloudsValue = responseData.weather[0].main;

      const sunriseValue = timeStampConverter(responseData.sunrise);
      const sunsetValue = timeStampConverter(responseData.sunset);

      console.log('sunrise , ', sunriseValue);
      console.log('sunset , ', sunsetValue);


      setCurrentWeather(prevState => (
          {
            ...prevState,
            temperature: responseData.temp.toFixed(1),
            UVI: responseData.uvi,
            feelsLike: responseData.feels_like.toFixed(1),
            humidity: responseData.humidity,
            pressure: pressureToMmHG,
            clouds: cloudsValue,
            wind: responseData.wind_speed,
            windAngle: responseData.wind_deg,
            icon: iconUrl,
            sunrise: sunriseValue,
            sunset: sunsetValue
          }));

      setHourlyWeather(res.hourly.slice(0, 25 - timeStampToHours(responseData.dt)));
    })
    .catch(error => console.error(error))
    .finally(() => setLoading(false));
  }

  const errorHandler = (err) => {
    if (err.code === 1) {
      alert('Error: Access to geolocation is denied!');
    } else if (err.code === 2) {
      alert('Error: Position is unavailable!');
    }
  };

  return {
    currentWeather,
    hourlyWeather,
    loading,
    cityName,
    getLocation
  };
};
