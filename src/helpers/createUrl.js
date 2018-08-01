export const createUrl = (type, lat, long) => {
  const uri = 'http://api.wunderground.com/api/';
  const key = 'bcdeab02bf65e45e';
  const url = uri + key + '/' + type + '/q/' + lat + ',' + long + '.json';
  console.log('data from getWeather function: ' + url);
  return url;
}