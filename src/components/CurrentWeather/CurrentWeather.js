import React, { Component } from 'react';
import './CurrentWeather.css';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
              currentTemp: '',
              conditionPic: '',
              conditions: ''
            }
  }

  componentDidMount() {
    const url = 'https://api.wunderground.com/api/bcdeab02bf65e45e/conditions/q/CA/San_Francisco.json';

    fetch(url).then(response => response.json())
      .then(json => {
        console.log(json.current_observation.icon_url);
        this.setState({
          currentTemp: json.current_observation.temp_f + "\xB0 F",
          conditionPic: json.current_observation.icon_url,
          conditions: json.current_observation.weather     })
        });
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