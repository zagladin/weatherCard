import axios from 'axios';

const ENDPOINT = 'https://serene-beyond-92116.herokuapp.com';

export const getWeather = async (lat, long) => {
  const url = `${ENDPOINT}/get-weather`;
  const data = {
    latitude: lat,
    longitude: long,
  };

  try {
    const weatherData = await axios.post(url, data);
    if (weatherData) {
      return weatherData.data;
    }
  } catch (error) {
    console.warn('Error while getting weather data ', error);
  }
};

export const getCityName = async (lat, long) => {
  const url = `${ENDPOINT}/get-city`;
  const data = {
    latitude: lat,
    longitude: long,
  };

  try {
    const response = await axios.post(url, data);

    if (response) {
      return response.data;
    }
  } catch (err) {
    return err;
  }
};

export const getNews = async (resource) => {
  const url = 'https://newsapi.org/v2/top-headlines';
  const apiKey = '01676b1d03984b97a1fe8635b7c59cd0';
  const endpoint = `${url}?sources=${resource}&apiKey=${apiKey}`;

  try {
    const response = await axios.get(endpoint);
    if (response) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
