import {useState} from 'react';
import {getCityName, getWeather} from '../api/api';
import {timeStampConverter} from '../helpers/helper';

export default function useWeather() {
  const [loading, setLoading] = useState(false);

  const [cityName, setCityName] = useState('');
  const [currentWeather, setCurrentWeather] = useState({
    temperature: '',
    humidity: '',
    pressure: '',
    pops: '',
    accuracy: '',
    icon: '',
    UVI: '',
    wind: '',
    windAngle: '',
    feelsLike: '',
    sunrise: '',
    sunset: '',
  });

  const [hourlyWeather, setHourlyWeather] = useState([]);

  const getLocation = () => {
    if (navigator.geolocation) {
      const options = {
        maximumAge: 10 * 60 * 1000,
        enableHighAccuracy: true,
      };

      const handleLocation = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;

        weatherProcessing(latitude, longitude, accuracy);
      };

      const errorHandler = (err) => {
        if (err.code === 1) {
          alert('Error: Access to geolocation is denied!');
        } else if (err.code === 2) {
          alert('Error: Position is unavailable!');
        }
      };

      navigator.geolocation.getCurrentPosition(handleLocation, errorHandler,
          options);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const weatherProcessing = (latitude, longitude, accuracy) => {

    setCurrentWeather(
        prevState => ({...prevState, accuracy: accuracy.toFixed(2)}));

    setLoading(true);

    getCityName(latitude, longitude)
    .then(res => setCityName(res[0].name))
    .catch(err => console.warn('Cannot get location info! ', err));

    getWeather(latitude, longitude).then(res => {
      const responseData = res.current;

      const iconTag = responseData.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/wn/${iconTag}.png`;
      const pressureToMmHG = responseData.pressure * 0.75;
      const popsValue = responseData.weather[0].main;

      const sunriseValue = timeStampConverter(responseData.sunrise);
      const sunsetValue = timeStampConverter(responseData.sunset);

      setCurrentWeather(prevState => (
          {
            ...prevState,
            temperature: responseData.temp.toFixed(1),
            UVI: responseData.uvi,
            feelsLike: responseData.feels_like.toFixed(1),
            humidity: responseData.humidity,
            pressure: pressureToMmHG,
            pops: popsValue,
            wind: responseData.wind_speed,
            windAngle: responseData.wind_deg,
            icon: iconUrl,
            sunrise: sunriseValue,
            sunset: sunsetValue,
          }));

      setHourlyWeather(res.hourly.slice(0, 12));
    }).catch(error => console.error(error)).finally(() => setLoading(false));
  };

  return {
    currentWeather,
    hourlyWeather,
    loading,
    cityName,
    getLocation,
  };
};
