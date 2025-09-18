// src/components/bits/AnimatedSection.jsx
import React, { useRef, useEffect } from 'react';
import { animateFromBottom } from '../../styles/animations';

const AnimatedSection = ({ children, delay = 0 }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current) {
            animateFromBottom(sectionRef.current, 1, delay);
        }
    }, [delay]);

    return (
        <div ref={sectionRef} className="py-20">
            {children}
        </div>
    );
};

export default AnimatedSection;