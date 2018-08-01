//http://api.wunderground.com/api/bcdeab02bf65e45e/conditions/q/33.933886199999996,-84.4902245

import React, { Component } from 'react';
import './CurrentWeather.css';
import { createUrl } from '../../helpers/createUrl';




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
  
  const url = createUrl('conditions', this.props.latitude, this.props.longitude);
   
   console.log("url on did mount: " + url);
    
    fetch(url).then(response => response.json())
      .then(json => {
        console.log("json response: ");
        console.log(json);
        this.setState({
          currentTemp: json.current_observation.temp_f + "\xB0 F",
          conditionPic: json.current_observation.icon_url,
          conditions: json.current_observation.weather
        });
        
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