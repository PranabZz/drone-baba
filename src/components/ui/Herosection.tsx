import React from 'react';
import Button from '../common/Buttons';

const HeroSection: React.FC = () => {
  return (
    <section
      className="hero product h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(src/assets/images/bg_1.jpg)', // Replace with the path to your DJI photo
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-lg"></div>
      <div className="relative z-10">
        <div className="title">
          <h2 className="title-heading text-2xl md:text-6xl">
            Experience the world with the vison
          </h2>
          <br></br>
          <div className='flex-container'>
            <Button theme="dark" >
              Dark Button
            </Button>
            <Button theme="light" >
              Light Button
            </Button>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
