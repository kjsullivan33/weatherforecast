//http://api.wunderground.com/api/bcdeab02bf65e45e/conditions/q/33.933886199999996,-84.4902245

import React, { Component } from 'react';
import './CurrentWeather.scss';





class CurrentWeather extends Component {
    
  render() {
    return (
      <div className="current-weather" >
        <p className="location" >{this.props.location}</p>
        <img className="condition-pic" src={this.props.conditionPic} alt={this.props.conditions} />
        <div className="current-temp" >{this.props.currentTemp}</div>
        <p className="conditions" >{this.props.conditions} </p>
      </div>
    )
  }
}

export default CurrentWeather;