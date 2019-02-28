const axios = require ('axios');

require('dotenv').config();


const openWeatherKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
const wundergroundKey = process.env.REACT_APP_WUNDERGROUND_API_KEY;

const convertToF = (temp) => {
  return Math.round(9 / 5 * (temp - 273) + 32);
}

const getConditionsIcon = (conditions) => {
  switch(conditions){
    case 'Clouds':
      return '../../assets/weather-icons/clouds.png';
    default:
      return;
  }

}


async function setUrl(forecastType, lat, lon){
  switch(forecastType) {
    case 'conditions':
      return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${openWeatherKey}`;
    case 'hourly':
      return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${openWeatherKey}`;
    case 'forecast10day':
      return `https://api.wunderground.com/api/${wundergroundKey}/forecast10day/q/${lat},${lon}.json`;
    default:
      return;
  }
}

const parseData = (forecastType, data) => {
  switch(forecastType) {
    case 'conditions':
      const currentTemp = convertToF(data.data.main.temp);
      const conditionsIcon = getConditionsIcon(data.data.weather.main);
      // console.log(currentTemp);
      return {
        currentTemp: currentTemp,
        pressure: data.data.main.pressure,
        humidity: data.data.main.humidity,
        conditionsIcon: conditionsIcon,
        displayLocation: `${data.data.name}, ${data.data.sys.country}`
      }
    case 'hourly':
        let hourlyData = [];
        hourlyData = data.data.list.map(hour => {
          const temp = convertToF(hour.main.temp);
          return {
            time: hour.dt_txt,
            temp: temp,
            pressure: hour.main.pressure,
            humidity: hour.main.humidity,
            weather: hour.weather[0].description
          }
        })
      return hourlyData;
    case 'forecast10day':
      let dailyData = data.data.forecast.simpleforecast.forecastday.map(day => {
        return {
          day: day.date.pretty,
          high: day.high.fahrenheit,
          low: day.low.fahrenheit,
          conditions: day.conditions,
          humidity: day.avehumidity
        }
      });
      return dailyData;
    default:
      return;
  }
}

export const fetchWeather = (forecastType, lat, lon) =>{
  
    return setUrl(forecastType, lat, lon)
      .then(url => {
        // console.log(url);
        return axios.get(url);
      })
        .then(results => {
          // console.log(results.data);
          return results;
        })
        .then(results => {
          const data = parseData(forecastType, results);
          // console.log(data);
          return data;
        })
        .catch(err => console.log(err));
    }

fetchWeather('conditions', 33.9526, 84.5499);

