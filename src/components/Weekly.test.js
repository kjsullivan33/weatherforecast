import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Weekly from './Weekly';
import Daily from './Daily';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

//test for what the component renders
//Component renders:
//  5 Daily Components:


describe('Weekly', () => {
  const weekly = shallow(<Weekly />);
  it('renders properly', () => {
    expect(weekly.find('div')).to.have.length(1);
  });

  it('renders contains a Daily component', () => {
    expect(weekly.find(Daily)).to.have.length(1);
  });

});

//test for the props the component receives
//  When I pass a function as a prop, what does 
//  my component use it for?Does it call it, or just give it
//  to another component? If it calls it, what does it call it
//  with?

  //The Weekly component contains no functions
  

//test for the state the component may hold
//  Does the component render different things under
//  different circumstances?

  //Weekly does not hold the state.  The state is passed from
  //the app container and then to the Daily component

//test the functionality when the user interacts with it
//When the user interacts with my component, what happens?

  //The Weekly component has no interaction. The interaction
  //occurs with the Daily component

//Side effect (API calls, etc)

  //API will be mounted with another component