import React from 'react';
import { configure, shallow } from 'enzyme';
import { expect} from 'chai';
import CurrentWeather from './CurrentWeather';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

//test for what the component renders
//Component renders:
//  current temperature
//  condition icon
//  conditions
describe('CurrentWeather', () => {
  let currentWeather = shallow(<CurrentWeather />);
  // let props = {
  //               currentTemp: 70,
  //               conditionPic: 'partlcloudy.jpg',
  //               conditions: 'Partly Cloudy'
  //             };
  it('renders properly', () => {
    
    expect(currentWeather.find('div')).to.have.length(2);
  });

  it('renders a div for the currentTemp in a className "current-temp"', () => {
    const currentTemp = <div className='current-temp'>Current Temp: </div>;
    expect(currentWeather.contains(currentTemp)).to.equal(true);
  });

  it('render an img to contain the conditions image with a className of condition-pic', () => {
    const image = <img className='condition-pic' alt='conditions' />;
    expect(currentWeather.contains(image)).to.equal(true);
  });

  it('renders a paragraph with a className of "conditions"', () => {
    const conditions = <p className='conditions'>Conditions: </p>
    expect(currentWeather.contains(conditions)).to.equal(true);
  });



//test for the props the component receives
//  When I pass a function as a prop, what does 
//  my component use it for?Does it call it, or just give it
//  to another component? If it calls it, what does it call it
//  with?

  //CurrentWeather is a standalone component that receives
  //the api data for current temperature, condition icon, &
  //conditions only.

//test for the state the component may hold
//  Does the component render different things under
//  different circumstances?

  //CurrentWeather does not test for any state.  It will get
  //the state passed through props from another component

  it('initializes currentTemp, condition pic, and conditions in `state`', () => {
    expect(currentWeather.state()).to.deep.equal(
      { currentTemp: '', conditionPic: '', conditions: ''});
  });
//test the functionality when the user interacts with it
//When the user interacts with my component, what happens?

  //there is no interaction from the user

//Side effect (API calls, etc)

  //API call for current conditions will be mounted here
  // describe('when mounted', () => {
  //   beforeEach(() => {
  //     props.fetchCurrentWeather = mockFetchCurrentWeather;
  //     currentWeather = mount(<CurrentWeather {...props} />);
  //   });
  //   const spyWeather = sinon.spy(fetchCurrentWeather);
  //   it('dispatches the `fetchCurrentWeather()` method', () => {
  //     expect(spyWeather.calledOnce).to.be.true;
  //   });
  // });
});