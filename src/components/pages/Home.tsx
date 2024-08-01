// src/pages/Home.tsx
import React from 'react';
import HeroSection from '../ui/Herosection'; // Adjust the path as needed
import Header from '../layout/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
        </div>
    );
};

export default Home;
