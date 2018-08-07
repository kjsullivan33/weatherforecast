import React from 'react';
import { configure, mount } from 'enzyme';
import { expect } from 'chai';
import Hourly from './Hourly';
import Hour from '../Hour/Hour';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

//test for what the component renders
//Component renders:
//  Multiple Hour Components:


describe('Hourly', () => {
  const hourly = mount(<Hourly />);
//   it('renders properly', () => {
//     expect(hourly.find('div')).to.have.length(1);
//   });

  it('renders contains an Hour component', () => {
    expect(hourly.find(Hour)).to.have.length(1);
  });

});

//test for the props the component receives
//  When I pass a function as a prop, what does 
//  my component use it for?Does it call it, or just give it
//  to another component? If it calls it, what does it call it
//  with?

  //The Hourly component contains no functions


//test for the state the component may hold
//  Does the component render different things under
//  different circumstances?

  //Hourly does not hold the state.  The state is passed from
  //the app container and then to the Hour component

//test the functionality when the user interacts with it
//When the user interacts with my component, what happens?

  //The Hourly component has contains a close button to hide. 

//Side effect (API calls, etc)

  //API will be mounted with another component