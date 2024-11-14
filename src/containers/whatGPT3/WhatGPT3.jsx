import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

export const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__padding'>
      <div className="gpt3__whatgpt3-features">
        <Feature  title='What is GPT-3'/>  
      </div>  
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
         <Feature /> 
         <Feature />
         <Feature />  
      </div>
    </div>
  )
}

export default WhatGPT3;