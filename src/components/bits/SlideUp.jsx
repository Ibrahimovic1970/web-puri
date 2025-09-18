// src/components/bits/SlideUp.jsx
import React, { useRef, useEffect } from 'react';
import { slideFromLeft } from '../../styles/animations';

const SlideUp = ({ children }) => {
    const ref = useRef(null);
    useEffect(() => slideFromLeft(ref.current, 1), []);
    return <div ref={ref}>{children}</div>;
};

export default SlideUp;