import React, { Component } from 'react';
import Daily from './Daily/Daily';
import './Weekly.css';

class Weekly extends Component {
  constructor(props) {
    super(props);

    this.state = {forecast : {}, loaded: false};
  }

  componentDidMount() {
    const url = 'https://api.wunderground.com/api/bcdeab02bf65e45e/forecast10day/q/CA/San_Francisco.json';

    fetch(url).then(response => response.json())
      .then(json => {
        console.log(json.forecast.simpleforecast.forecastday);
        this.setState({ forecast: json.forecast.simpleforecast.forecastday,
                        loaded: true});
      });
    console.log(this.state.forecast);
  }

  
  render() {
    let daily = '';
    if(this.state.loaded) {
      daily = this.state.forecast.map(item => {
        return (
          <Daily
            key={item.period}
            day={item.date.pretty}
            pic={item.icon_url}
            hi={item.high.fahrenheit}
            low={item.low.fahrenheit}
            conditions={item.conditions} />
        );
      });
    } else {
      daily = <p>loading...</p>
    }
    return(
      <div className="weekly-box">
        {daily}
      </div>
      );
  }
}

export default Weekly;