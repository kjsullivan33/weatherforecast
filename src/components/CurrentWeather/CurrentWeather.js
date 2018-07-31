import React, { Component } from 'react';
import './CurrentWeather.css';
import { getWeather } from '../../helpers/getWeather';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
              url: '',
              currentTemp: '',
              conditionPic: '',
              conditions: ''
            }
    
  }


  componentDidMount() {
    getWeather('conditions');
    console.log("data: " + getWeather('conditions'));
    
    // this.setState({
    //   currentTemp: data.current_observation.temp_f,
    //   conditionPic: data.current_observation.icon_url,
    //   conditions: data.current_observation.weather
    // });
  }
    
    
  
  render() {
    return (
      <div className="current-weather">
        <div className="current-temp">{this.state.currentTemp}</div>
        <img className="condition-pic" src={this.state.conditionPic} alt={this.state.conditions}/>
        <p className="conditions">{this.state.conditions} </p>
      </div>
    )
  }
}

export default CurrentWeather;