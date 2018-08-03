

// const getLocationCoords = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         const {latitude, longitude} = position.coords;
//         console.log(latitude);
//         return {latitude, longitude};
//       });
//     } 
//   }

// export const createUrl = (type, lat, lon) => {
  
//   console.log('data from getWeather function: ' + url);
//   return url;
// }

export async function fetchWeather(type, lat, lon){
  const uri = 'https://api.wunderground.com/api/';
  const key = 'bcdeab02bf65e45e';
  const url = uri + key + '/' + type + '/q/' + lat + ',' + lon + '.json';

  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    switch (type) {
          case 'conditions':
            return {
              currentTemp: json.current_observation.temp_f + "\xB0 F",
              conditionPic: json.current_observation.icon_url,
              conditions: json.current_observation.weather,
              city: json.current_observation.display_location.city,
              state: json.current_observation.display_location.state,
              country: json.current_observation.display_location.country
            };
          case 'forecast10day':
            return {
              forecast: json.forecast.simpleforecast.forecastday,
              loaded: true
            };
          case 'hourly':
            return {
              hourlyForecast: json.hourly_forecast, 
              loaded: true
            };
          default:
            return;
          }
  }

  catch (err) {
    console.log("fetch failed: " + err);
  }
  // return fetch(url).then(response => {
  //       console.log("url: " + url);
  //       console.log("response: " + response.json());
  //       response.json()})
  //     .then(json => {
  //       console.log("json: " + json);
  //       console.log('type: ' + type);
  //       switch (type) {
  //         case 'conditions':
  //           return {
  //             currentTemp: json.current_observation.temp_f + "\xB0 F",
  //             conditionPic: json.current_observation.icon_url,
  //             conditions: json.current_observation.weather,
  //             city: json.current_observation.display_location.city,
  //             state: json.current_observation.display_location.state,
  //             country: json.current_observation.display_location.country
  //           };
  //         case 'forecast10day':
  //           return {
  //             forecast: json.forecast.simpleforecast.forecastday,
  //             loaded: true
  //           };
  //         case 'hourly':
  //           return {
  //             hourlyForecast: json.hourly_forecast, 
  //             loaded: true
  //           };
  //         default:
  //           return;
  //         }});

}