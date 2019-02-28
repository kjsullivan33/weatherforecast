
import React, { Component } from 'react';
import './CurrentWeather.scss';





class CurrentWeather extends Component {
    
  render() {
    return (
      <div className="current-weather" >
        <p className="location" >{this.props.location}</p>
        <div className="current-temp" >{this.props.currentTemp}F</div>
        {/* <img src={require(`${this.props.conditionsIcon}`)} alt="conditions"></img> */}
        <p className="conditions" > Humidity: {this.props.humidity}% </p>
        <p className="conditions">Pressure: {this.props.pressure} hpa</p>
      </div>
    )
  }
}

export default CurrentWeather;