// src/components/bits/Button.jsx
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Button = ({ children, variant = "primary", as: Component = 'button', to, onClick, className = "" }) => {
    const btnRef = useRef(null);

    const base = "font-semibold px-7 py-3 rounded-full transition-all duration-200 focus:outline-none";
    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg",
        secondary: "bg-white/20 backdrop-blur-md border border-white hover:bg-white/30 text-white"
    };

    useEffect(() => {
        gsap.fromTo(btnRef.current, { scale: 0.8, opacity: 0 }, {
            scale: 1, opacity: 1, duration: 0.5, delay: 0.2, ease: 'back.out(1.5)'
        });
    }, []);

    return (
        <Component
            ref={btnRef}
            to={to}
            onClick={onClick}
            className={`${base} ${variants[variant]} ${className}`}
        >
            {children}
        </Component>
    );
};

export default Button;