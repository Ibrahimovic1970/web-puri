// src/components/bits/ParallaxImage.jsx
import React, { useRef, useEffect } from 'react';
import { addParallax } from '../../styles/animations';

const ParallaxImage = ({ src, alt, speed = -0.2 }) => {
    const imgRef = useRef(null);
    useEffect(() => addParallax(imgRef.current, speed), []);
    return <img ref={imgRef} src={src} alt={alt} className="w-full h-auto object-cover" />;
};

export default ParallaxImage;