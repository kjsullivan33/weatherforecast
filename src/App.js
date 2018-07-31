import React, { Component } from 'react';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Weekly from './components/Weekly';
import Hourly from './components/Hourly/Hourly';
import ChangeLocation from './components/ChangeLocation/ChangeLocation';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showWeekly: false,
      showHourly: false,
      showCurrent: true};
  }

  toggleWeekly = () =>{
    const doesShow = this.state.showWeekly;
    this.setState({showWeekly: !doesShow,
                   showHourly: false,
                   showCurrent: doesShow});
  }

  toggleHourly = () => {
    const doesShow = this.state.showHourly;

    this.setState({ showWeekly: false,
                    showHourly: !doesShow,
                    showCurrent: doesShow });
  }

  toggleCurrent = () => {
    this.setState({
      showWeekly: false,
      showHourly: false,
      showCurrent: true
    });
  }

  changeLocation = (city, state) => {

  }
  
  
  render() {
  
  let current = true;
  if (this.state.showCurrent){
    current = (<CurrentWeather url={this.state.currentWeatherUrl}/>)
  } else {
    current = (<div>
                <button 
                  className="btn" 
                  onClick={this.toggleCurrent}>Current Forecast
                </button>
               </div>);
  }
  
  let weekly = true;
  if (this.state.showWeekly) {
    weekly = (<Weekly url={this.state.weeklyUrl}/>);
  }
  let hourly = true;
  if (this.state.showHourly) {
    hourly = (<Hourly url={this.state.hourlyUrl}/>);
  }
    return (
      <div className="App">
        <ChangeLocation />
        {current}
        <button className="btn" onClick={this.toggleWeekly}>Daily Forecast</button>
        <button className="btn" onClick={this.toggleHourly}>Hourly Forecast</button>
        {weekly}
        {hourly}
      </div>
    );
  }
}

export default App;
