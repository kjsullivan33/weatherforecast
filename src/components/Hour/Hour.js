import React from 'react';
import './Hour.scss';

const hour =(props) => {
  
    return (
      <div>
        <ul className="hourly-list">
          <li className="hourly-day">{props.day} </li>
          <li className='time'>Time:{props.time} </li>
          <li className='hour-temp'>Temperature: {props.temp}</li>
          <li className='hourly-conditions'>Conditions: {props.conditions}</li>
        </ul>
      </div>
    )
}


export default hour;