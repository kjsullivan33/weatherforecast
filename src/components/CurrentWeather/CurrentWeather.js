import React, { Component } from 'react';
import './CurrentWeather.css';





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


  url = (type) => {
    const uri = 'https://api.wunderground.com/api/';
    const key = 'bcdeab02bf65e45e';
    const url = uri + key + '/' + type + '/q/' + this.props.latitude + ',' + this.props.longitude;
    console.log('data from getWeather function: ' + url);
    return url;
  }
   
  

  componentDidMount() {
  
   const url = this.url('conditions');
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
        
    // this.setState({
    //   currentTemp: data.current_observation.temp_f,
    //   conditionPic: data.current_observation.icon_url,
    //   conditions: data.current_observation.weather
    // });
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