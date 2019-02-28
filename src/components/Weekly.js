import React, { Component } from 'react';
import Daily from './Daily/Daily';
import Spinner from './Spinner/Spinner';
import { fetchWeather } from '../helpers/fetchWeather';
import './Weekly.scss';


class Weekly extends Component {
  constructor(props) {
    super(props);

    this.state = {forecast : {}, loaded: false};
  }

  componentDidMount() {
    try {
      fetchWeather('forecast10day', this.props.latitude, this.props.longitude).then(data => {
        // console.log(data);
        this.setState({
          forecast: data,
          loaded: true
        });
      });
    } catch(err) {
      console.log(err);
    }
    
  }

  
  render() {
    let daily = '';
    if(this.state.loaded && this.state.forecast) {
      try {
        daily = this.state.forecast.map((day, index) => {
          return (
            <Daily
              key={index}
              day={day.day}
              high={day.high}
              low={day.low}
              conditions={day.conditions}
              humidity={day.humidity} />
          );
        });
      } catch (err) {
        console.log(err);
      }
    } else {
        daily = <Spinner />
      }
      
    return(
      <div className="weekly-box">
        {daily}
      </div>
      );
  }
}

export default Weekly;