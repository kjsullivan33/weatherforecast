
export const getWeather = (type) => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
    const latitude= position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log( latitude);
    console.log( longitude);
    getData(createUrl(type, latitude, longitude), type);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
}

const createUrl = (type, lat, long) => {
  const uri = 'http://api.wunderground.com/api/';
  const key = 'bcdeab02bf65e45e';
  return uri + key + '/' + type + '/q/' + lat + ',' + long + '.json';
  }


const getData = (url, type) => {
  fetch(url).then(response => response.json())
    .then(json => {
      console.log(json);

      switch(type){
        case 'conditions':
          return {
            currentTemp: json.current_observation.temp_f + "\xB0 F",
            conditionPic: json.current_observation.icon_url,
            conditions: json.current_observation.weather
          };
          
        case 'forecast10day':
          return {
            forecast: json.forecast.simpleforecast.forecastday,
            loaded: true
          };
          
        case 'hourly':
          return{
            hourlyForecast: json.hourly_forecast,
            loaded: true
          };
          
        default:
          return;
      }
      
  });
    }