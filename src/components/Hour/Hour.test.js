import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Hour from './Hour';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

//test for what the component renders
//Component renders:
//  A card that displays the following:
//  Hour
//  Temp
//  Condtions

describe('Hour', () => {
  const hour = shallow(<Hour />);
  it('renders properly', () => {
    expect(hour.find('div')).to.have.length(1);
  });

  const time = <p className='time'>Time: </p>;
  it('contains a p to display the time', () => {
    expect(hour.contains(time)).to.equal(true);
  });

  const temp = <p className='hour-temp'>Temperature</p>;
  it('contains a p to display the temp', () => {
    expect(hour.contains(temp)).to.equal(true);
  });

  const conditions = <p className='hourly-conditions'>Conditions: </p>;
  it('contains a p to display the hourly conditions', () => {
    expect(hour.contains(conditions)).to.equal(true);
  });
});

//test for the props the component receives
//  When I pass a function as a prop, what does 
//  my component use it for?Does it call it, or just give it
//  to another component? If it calls it, what does it call it
//  with?

  //The hourly card has no functionality

//test for the state the component may hold
//  Does the component render different things under
//  different circumstances?

  //Hour component does not hold the state.  The state is passed through
  //the app container.

//test the functionality when the user interacts with it
//When the user interacts with my component, what happens?

  //The hours card has no functionality
  

//Side effect (API calls, etc)

  //API will be mounted with another component