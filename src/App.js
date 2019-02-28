import React, { Component } from 'react';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import { fetchWeather } from '../src/helpers/fetchWeather';
import Weekly from './components/Weekly';
import Hourly from './components/Hourly/Hourly';
import ChangeLocation from './components/ChangeLocation/ChangeLocation';
import Footer from './Footer/Footer';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coords: {
        lat: '33.9',
        lng: '-84.9'
      },
      address: '',
      displayLocation: '',
      showWeekly: false,
      showHourly: false,
      currentTemp: '',
      pressure: '',
      humidity: '',
    };
  }

  

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    // console.log("address" + address);
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(coords => {
        // console.log("coords: " , coords);
        fetchWeather('conditions', coords.lat, coords.lng)
        .then(data => {
          // console.log(data);
          // console.log(address);
          this.setState({
            currentTemp: data.currentTemp,
            pressure: data.pressure,
            humidity: data.humidity,
            displayLocation: data.displayLocation,
            address: ''
          });
        });
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
    });
  }

  componentDidMount() {
    
    navigator.geolocation.getCurrentPosition((pos) => {

      fetchWeather('conditions', pos.coords.latitude, pos.coords.longitude)
        .then(data => {
          // console.log(`data: ${data}`);
          this.setState({
            displayLocation: data.displayLocation,
            currentTemp: data.currentTemp,
            pressure: data.pressure,
            humidity: data.humidity,
            conditionsIcon: data.conditionsIcon
           
          });
        });
    });
  }


  render() {
    
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
        <header className="main-display">
          <ChangeLocation
            change={this.handleChange}
            select={this.handleSelect}
            address={this.state.address} />
          <CurrentWeather
            currentTemp={this.state.currentTemp}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            location={this.state.displayLocation}
            conditionsIcon={this.state.conditionsIcon} />
        </header>
        <div className="button-menu">
          <button className="btn" onClick={this.toggleWeekly}>Daily Forecast</button>
          <button className="btn" onClick={this.toggleHourly}>Hourly Forecast</button>
        </div>
        <div className="detail-display">
        {weekly}
        {hourly}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
