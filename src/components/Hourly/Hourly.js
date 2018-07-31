import React, { Component } from 'react';
import Hour from '../Hour/Hour';
import './Hourly.css';

class Hourly extends Component {
  constructor(props) {
    super(props);

    this.state = { hourlyForecast: {}, loaded: false };
  }

  componentDidMount() {
    const url = 'http://api.wunderground.com/api/bcdeab02bf65e45e/hourly/q/CA/San_Francisco.json';

    fetch(url).then(response => response.json())
      .then(json => {
        console.log(json.hourly_forecast);
        this.setState({
          hourlyForecast: json.hourly_forecast,
          loaded: true
        });
      });
    console.log(this.state.hourlyForecast);
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