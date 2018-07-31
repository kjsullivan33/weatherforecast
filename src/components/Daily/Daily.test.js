import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Daily from './Daily';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

//test for what the component renders
//Component renders:
//  A card that displays the following:
//  Day
//  Hi Temp
//  Low Temp
//  Conditions Icon
//  Conditions Description

describe('Daily', () => {
  const daily = shallow(<Daily />);
  it('renders properly', () => {
    expect(daily.find('div')).to.have.length(1);
  });

  const day = <h2 className='day-text'>Day</h2>;
  it('contains an h2 to display the day', () => {
    expect(daily.contains(day)).to.equal(true);
  });

  const hiTemp = <p className='hi-temp'>Hi</p>;
  it('contains a p to display the hi temp', () => {
    expect(daily.contains(hiTemp)).to.equal(true);
  });

  const lowTemp = <p className='low-temp'>Low</p>;
  it('contains a p to display the low temp', () => {
    expect(daily.contains(lowTemp)).to.equal(true);
  });

  const icon = <img className='daily-icon' alt='icon' />;
  it('contains an img to display the conditions icon', () => {
    expect(daily.contains(icon)).to.equal(true);
  });

  const conditions = <p className='daily-conditions'>Conditions: </p>;
  it('contains a p to display the daily conditions ', () => {
    expect(daily.contains(conditions)).to.equal(true);
  });

});

//test for the props the component receives
//  When I pass a function as a prop, what does 
//  my component use it for?Does it call it, or just give it
//  to another component? If it calls it, what does it call it
//  with?

  //The Daily cards should have a function that displays the
  //hourly forecast when clicked. The hourly forecast should be
  // hidden until card is clicked.

//test for the state the component may hold
//  Does the component render different things under
//  different circumstances?

  //Daily does not hold the state.  The state is passed from
  //the app container.

//test the functionality when the user interacts with it
//When the user interacts with my component, what happens?

  //The daily cards can be clicked by the user to display
  //the hourly forecast

//Side effect (API calls, etc)

  //API will be mounted with another component