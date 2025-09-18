// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ActivitiesSection from '../components/ActivitiesSection';
import GallerySection from '../components/GallerySection';

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ActivitiesSection />
            <GallerySection />
        </>
    );
};

export default Home;