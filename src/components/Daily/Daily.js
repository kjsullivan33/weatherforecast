import React from 'react';
import './Daily.css';

const daily = (props) => {
    return (
      <div className="daily-box">
        <p className='day-text'>{props.day}</p>
        <img className='daily-icon' src={props.pic} alt='icon' />
          <p className='temp'>{props.hi}/ {props.low}</p>
          <p className='daily-conditions'>{props.conditions}</p>
      </div>
    )
  }


export default daily;