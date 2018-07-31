import React, { Component } from 'react';
import Hour from '../Hour/Hour';
import './Hourly.css';
import { getWeather } from '../../helpers/getWeather';

class Hourly extends Component {
  constructor(props) {
    super(props);

    this.state = { hourlyForecast: {}, loaded: false };
  }

  componentDidMount() {

    getWeather('hourly');
  }


  render() {
    let hourly = '';
    if (this.state.loaded) {
      hourly = this.state.hourlyForecast.map((item, index) => {
        return (
          <Hour
            key={index}
            time={item.FCTTIME.civil}
            temp={item.temp.english}
            conditions={item.condition} />
        );
      });
    } else {
      hourly = <p>loading...</p>
    }
    return (
      <div className="hourly-box">
        {hourly}
      </div>
    );
  }
}


export default Hourly;