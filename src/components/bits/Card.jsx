// src/components/bits/Card.jsx
import React, { useRef, useEffect } from 'react';
import { scaleIn } from '../../styles/animations';

const Card = ({ children, delay = 0 }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const el = cardRef.current;
        if (!el) return; // ✅ Cegah jika ref belum mount

        scaleIn(el, 0.6, delay);

        // Tidak perlu cleanup karena animasi satu arah
    }, [delay]);

    return (
        <div ref={cardRef} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1">
            {children}
        </div>
    );
};

export default Card;