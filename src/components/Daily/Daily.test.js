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
  const props = {
    day: 'Monday',
    pic: 'image.jpg',
    hi: '80',
    low: '70',
    conditions: 'partly cloudy'
  }
  it('renders properly', () => {
    expect(daily.find('div')).to.have.length(1);
  });

  // const day = <p className='day-text'>{props.day}</p>;
  // it('contains a p to display the day', () => {
  //   expect(daily.find(day)).to.have.length(1);
  // });

  // const temp = <p className='temp'>{props.hi}/ {props.low}</p>;
  // it('contains a p to display the hi temp', () => {
  //   expect(daily.contains(temp)).to.equal(true);
  // });


  // const icon = <img className='daily-icon' src={props.pic} alt='icon' />;
  // it('contains an img to display the conditions icon', () => {
  //   expect(daily.contains(icon)).to.equal(true);
  // });

  // const conditions = <p className='daily-conditions'>{props.conditions}</p>;
  // it('contains a p to display the daily conditions ', () => {
  //   expect(daily.contains(conditions)).to.equal(true);
  // });

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