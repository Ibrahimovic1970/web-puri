// src/components/bits/FadeIn.jsx
import React, { useRef, useEffect } from 'react';
import { fadeIn } from '../../styles/animations';

const FadeIn = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    useEffect(() => fadeIn(ref.current, 0.8, delay), [delay]);
    return <div ref={ref}>{children}</div>;
};

export default FadeIn;