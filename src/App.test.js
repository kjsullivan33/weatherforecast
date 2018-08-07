import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Weekly from './components/Weekly';
import Hourly from './components/Hourly/Hourly';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

//test for what the component renders
//Component renders:
//  Current Weather Component
//  Weekly Forecast Component
//  Hourly Forecast Component

describe('App', () => {
  const app = mount(<App />);
  it('renders the CurrentWeather component', () => {
    expect(app.find(CurrentWeather)).to.have.length(1);
  });

  it('renders the Weekly component', () => {
    expect(app.find(Weekly)).to.have.length(1);
  });

  it('renders an Hourly component', () => {
    expect(app.find(Hourly)).to.have.length(1);
  });
  
});

//test for the props the component receives
//  When I pass a function as a prop, what does 
//  my component use it for?Does it call it, or just give it
//  to another component? If it calls it, what does it call it
//  with?

//test for the state the component may hold
//  Does the component render different things under
//  different circumstances?

  //App will contain the state and will pass the state to the
  //components it renders.  The app will initialize the API call
  // and the state will be set once the api call is completed.

//test the functionality when the user interacts with it
//When the user interacts with my component, what happens?

  //there is no interaction from the user

//Side effect (API calls, etc)

  //API will be mounted here

