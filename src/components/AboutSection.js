import React from 'react';
// images
import home1 from '../img/home1.png';
// styled
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from '../styles';

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className='title'>
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videogaphy ideas that you have. We
          have expert professionals ready to hear from you !
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt='home 1' />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
