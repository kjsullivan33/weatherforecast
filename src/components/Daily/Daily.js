import React from 'react';
import './Daily.scss';

const daily = (props) => {
    return (
      <div className="daily-box">
        <p className='day-text'>{props.day}</p>
        <p className='temp'>  {props.high}/{props.low}F</p>
        <p className='daily-conditions'>{props.conditions}</p>
        <p className='daily-conditions'>Humidity: {props.humidity}</p>
      </div>
    )
  }


export default daily;