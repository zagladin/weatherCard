import axios from 'axios';

const APIKey = process.env.REACT_APP_API_KEY;

export const getWeather = async (lat, long) => {
  const url = 'https://api.openweathermap.org/data/2.5/onecall';
  let endpoint =
      `${url}?lat=${lat}&lon=${long}&exclude=minutely,daily,alerts&units=metric&appid=${APIKey}`;

  return new Promise((resolve, reject) => {
    axios.get(endpoint)
    .then(response => resolve(response.data))
    .catch(error => reject(error));
  });
};

export const getCityName = async (lat, long) => {
  const url = 'https://api.openweathermap.org/geo/1.0/reverse';
  const endpoint = `${url}?lat=${lat}&lon=${long}&limit=1&appId=${APIKey}`;

  try {
    const response = await axios.get(endpoint);

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
