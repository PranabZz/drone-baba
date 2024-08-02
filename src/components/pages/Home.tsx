// src/pages/Home.tsx
import React from 'react';
import HeroSection from '../ui/Herosection'; // Adjust the path as needed
import Header from '../layout/Header';
import Aboutus from '../ui/Aboutus';
import Footer from '../layout/Footer';
import Product from '../ui/Products';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Aboutus/>  
            <Product/>
            <Footer/>
        </div>
    );
};

export default Home;
