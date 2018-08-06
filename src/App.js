import React, { Component } from 'react';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Weekly from './components/Weekly';
import Hourly from './components/Hourly/Hourly';
import ChangeLocation from './components/ChangeLocation/ChangeLocation';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coords: {
        lat: '33.9',
        lng: '-84.9'
      },
      address: '',
      showWeekly: false,
      showHourly: false,
      showCurrent: true};
  }

  

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    console.log("address" + address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(coords => {
        console.log("coords: " , coords);
        this.setState({ coords: coords, address: address });
      })
      .catch(error => console.error('Error', error));
  };

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
    current = (
      <div>
      <ChangeLocation
        change={this.handleChange}
        select={this.handleSelect}
        address={this.state.address} />
      <CurrentWeather 
        latitude={this.state.coords.lat}
        longitude={this.state.coords.lng}
        location={this.state.address}/>
      </div>)
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
      latitude={this.state.coords.lat}
      longitude={this.state.coords.lng}/>);
  }
  let hourly = true;
  if (this.state.showHourly) {
    hourly = (<Hourly 
      latitude={this.state.coords.lat}
      longitude={this.state.coords.lng}/>);
  }
    return (
      <div className="App">
        
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
