

const getLocationCoords = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        const {latitude, longitude} = position.coords;
        console.log(latitude);
        return {latitude, longitude};
      });
    } 
  }

export const createUrl = (type, lat, lon) => {
  const uri = 'https://api.wunderground.com/api/';
  const key = 'bcdeab02bf65e45e';
  const url = uri + key + '/' + type + '/q/' + lat + ',' + lon + '.json';
  console.log('data from getWeather function: ' + url);
  return url;
}

export const fetchUrl = (type) => {
  getLocationCoords().then(
    (coords) => {
      // Got location data, create url now
      createUrl(type, coords)}
  );
}