//http://api.wunderground.com/api/bcdeab02bf65e45e/conditions/q/33.933886199999996,-84.4902245

import React, { Component } from 'react';
import './CurrentWeather.css';
import { fetchWeather } from '../../helpers/fetchWeather';




class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
              currentTemp: '',
              conditionPic: '',
              conditions: '',
              address: 'Marietta, GA, USA'
            }
    
  }

  componentDidMount() {

    fetchWeather('conditions', this.props.latitude, this.props.longitude).then(data => {
      console.log(data);
      const address = data.city + ', ' + data.state + ', ' + data.country;
      console.log(address);
      this.setState({
        currentTemp: data.currentTemp,
        conditionPic: data.conditionPic,
        conditions: data.conditions,
        address: address
      });
    });
}

componentWillReceiveProps(nextprops) {
  fetchWeather('conditions', nextprops.latitude, nextprops.longitude).then(data => {
      console.log(data);
      this.setState({
        currentTemp: data.currentTemp,
        conditionPic: data.conditionPic,
        conditions: data.conditions,
        address: this.props.location
      });
    });
}
    
  render() {
    return (
      <div className="current-weather" >
        <p className="location" >{this.state.address}</p>
        <img className="condition-pic" src={this.state.conditionPic} alt={this.state.conditions} />
        <div className="current-temp" >{this.state.currentTemp}</div>
        <p className="conditions" >{this.state.conditions} </p>
      </div>
    )
  }
}

export default CurrentWeather;