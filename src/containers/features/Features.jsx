import React from 'react';
import { useSelector} from 'react-redux';
import './features.css';
import { Feature } from '../../components';

export const Features = () => {

  const featurePosts = useSelector(state => state.featurePosts);

  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p className='gradient__subtext gpt__features-subtext gradient__subtext'>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
          {featurePosts.map((content, key) => ( 
            <Feature title={content.title} text={content.text} key={key} /> )
            )}
      </div>
    </div>
  )
}

export default Features;
