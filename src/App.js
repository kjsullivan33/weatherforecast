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
      latitude: '33.9',
      longitude: '-84.9',
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
  // componentDidMount(){
  // navigator.geolocation.getCurrentPosition(location => {
  //   this.setState({
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude
  //   })
  //   });
  // }
  render() {
  
  let current = true;
  if (this.state.showCurrent){
    current = (<CurrentWeather 
      latitude={this.state.latitude}
      longitude={this.state.longitude}/>)
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
    weekly = (<Weekly 
      latitude={this.state.latitude}
      longitude={this.state.longitude}/>);
  }
  let hourly = true;
  if (this.state.showHourly) {
    hourly = (<Hourly 
      latitude={this.state.latitude}
      longitude={this.state.longitude}/>);
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
