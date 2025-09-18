// src/components/HeroSection.jsx
import React, { useRef, useEffect } from 'react';
import { animateFromBottom, fadeIn } from '../styles/animations';
import { Link } from 'react-router-dom';
import Button from './bits/Button';

import heroBg from '../assets/Image.jpg';

const HeroSection = () => {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        animateFromBottom(titleRef.current, 1.2, 0.1);
        fadeIn(descRef.current, 1, 0.4);
        fadeIn(ctaRef.current, 1, 0.7);
    }, []);

    return (
        <section
            className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden"
            style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
                <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                    Komunitas Puri Arraya
                </h1>
                <p ref={descRef} className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                    Ruang tumbuh bagi generasi penuh semangat — tempat anak-anak belajar, bermain, dan berkarya bersama.
                </p>
                <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Button variant="primary" as={Link} to="/activities">
                        Jelajahi Aktivitas Seru
                    </Button>
                    <Button variant="secondary" as={Link} to="/gallery">
                        Kenangan Tak Terlupakan
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white pointer-events-none">
                <span className="text-sm">Gulir untuk eksplor</span>
            </div>
        </section>
    );
};

export default HeroSection;