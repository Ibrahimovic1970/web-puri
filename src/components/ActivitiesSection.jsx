// src/components/ActivitiesSection.jsx
import React, { useRef, useEffect } from 'react';
import { staggerGrid } from '../styles/animations';
import Card from './bits/Card';

const activities = [
    { title: 'Seni & Kerajinan', desc: 'Mengasah kreativitas melalui lukis, origami, dan DIY.' },
    { title: 'Olahraga Bersama', desc: 'Sepak bola, lompat tali, dan fun games sehat.' },
];

const ActivitiesSection = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gridRef.current?.querySelectorAll('.activity-card');
        if (cards?.length > 0) {
            staggerGrid(Array.from(cards), { dur: 0.6, delay: 0.2, stagger: 0.3 });
        }
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-12">Kegiatan Rutin</h2>
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {activities.map((act, i) => (
                        <Card key={i} delay={i * 0.1} className="activity-card">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{act.title}</h3>
                            <p className="text-gray-600">{act.desc}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;