import React from 'react';
import './possibility.css';
import possibilityImg  from '../../assets/possibility.png';

export const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding'>
      <div className='gpt3__possibility-img'>
        <img src={possibilityImg} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p className='gpt3__possibility-content-text'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
           Party we years to order allow asked of.
        </p>
        <p className='gradient__subtext'>
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  )
}

export default Possibility;