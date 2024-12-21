import React from 'react';
import { useSelector} from 'react-redux';
import './whatGPT3.css';
import { Feature } from '../../components';

export const WhatGPT3 = () => {

  const featureContent = useSelector(state => state.app.featureContent);
  const featureTitles = featureContent.at(0);

  return (
    <div className='gpt3__whatgpt3 section__margin'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title={featureTitles.title} text={featureTitles.text} />
      </div>  
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
          {featureContent.map((content, key) => ( 
            <Feature title={content.title} text={content.text} key={key} /> )
            )}
      </div>
    </div>
  )
}

export default WhatGPT3;

