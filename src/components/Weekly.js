import React, { Component } from 'react';
import Daily from './Daily/Daily';
import { createUrl } from '../helpers/createUrl';
import './Weekly.css';


class Weekly extends Component {
  constructor(props) {
    super(props);

    this.state = {forecast : {}, loaded: false};
  }

  componentDidMount() {
    const url = createUrl('forecast10day', this.props.latitude, this.props.longitude);

    fetch(url).then(response => response.json())
      .then(json => {
        console.log(json.forecast.simpleforecast.forecastday);
        this.setState({
          forecast: json.forecast.simpleforecast.forecastday,
          loaded: true
        });
      });
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