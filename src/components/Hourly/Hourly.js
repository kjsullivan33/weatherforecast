import React, { Component } from 'react';
import Hour from '../Hour/Hour';
import Spinner from '../Spinner/Spinner';
import { fetchWeather } from '../../helpers/fetchWeather';
import './Hourly.scss';


class Hourly extends Component {
  constructor(props) {
    super(props);

    this.state = { hourlyForecast: {}, loaded: false };
  }

  componentDidMount() {

    fetchWeather('hourly', this.props.latitude, this.props.longitude).then(data => {
      // console.log(`hourly data: ${data}`);
      this.setState({
        hourlyForecast: data,
        loaded: true
      });
    });
  
  }


  render() {
    let hourly = '';
    if (this.state.loaded) {
      hourly = this.state.hourlyForecast.map((hour, index) => {
        return (
          <Hour
            key={index}
            time={hour.time}
            temp={hour.temp}
            weather={hour.weather}
            pressure={hour.pressure}
            humidity={hour.humidity} />
        );
      });
    } else {
      hourly = <Spinner/>
    }
    return (
      <div className="hourly-box">
        {hourly}
      </div>
    );
  }
}


export default Hourly;