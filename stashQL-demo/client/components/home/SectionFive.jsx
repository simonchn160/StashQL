import React, { Component } from 'react';
import filler from '../../images/shepherd.png';

const SectionFive = () => {
    return (
      <div id='section-five'>
        <div id="section-five-img">  
          <img id='filler-img' src={filler}/>
        </div>
        <div id="section-five-text">
          <div>
            <h3>What StashQL can offer</h3>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h5>
          </div>
        </div>
      </div>
    );
};

export default SectionFive;