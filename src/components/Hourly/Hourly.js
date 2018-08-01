import React, { Component } from 'react';
import Hour from '../Hour/Hour';
import { createUrl } from '../../helpers/createUrl';
import './Hourly.css';


class Hourly extends Component {
  constructor(props) {
    super(props);

    this.state = { hourlyForecast: {}, loaded: false };
  }

  componentDidMount() {
    const url = createUrl('hourly', this.props.latitude, this.props.longitude);

    fetch(url).then(response => response.json())
      .then(json => {
        console.log("json response: ");
        console.log(json);
        this.setState({hourlyForecast: json.hourly_forecast, loaded: true});

      });
  
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
            conditions={item.condition}
            day={item.FCTTIME.weekday_name} />
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