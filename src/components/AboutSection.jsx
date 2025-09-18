// src/components/AboutSection.jsx
import React, { useRef, useEffect } from 'react';
import { slideFromLeft, slideFromRight, addParallax } from '../styles/animations';
import aboutImg from '../assets/Image2.jpg';

const AboutSection = () => {
    const imgRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        slideFromRight(imgRef.current, 1, 0.2);
        slideFromLeft(contentRef.current, 1, 0.3);
        addParallax(imgRef.current, -0.1);
    }, []);

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
                <div className="lg:w-1/2">
                    <img
                        ref={imgRef}
                        src={aboutImg}
                        alt="Anak-anak bermain bersama"
                        className="rounded-2xl shadow-xl object-cover w-full h-96"
                    />
                </div>
                <div ref={contentRef} className="lg:w-1/2 space-y-6">
                    <h2 ref={titleRef} className="text-4xl font-bold text-blue-900">Tentang Kami</h2>
                    <p className="text-lg text-gray-700">
                        Kami percaya bahwa setiap anak memiliki potensi luar biasa. Di Puri Arraya, kami menciptakan ruang aman
                        di mana mereka bisa menjadi diri sendiri, belajar tanpa takut, dan tumbuh dengan rasa saling menghargai.
                    </p>
                    <p className="text-gray-600">
                        Dibentuk oleh orang tua dan warga, komunitas ini lahir dari keinginan kuat untuk memberi anak-anak pengalaman positif
                        di luar sekolah — melalui kreativitas, olahraga, dan nilai-nilai kebersamaan.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li>✨ Pertemuan rutin mingguan</li>
                        <li>🎨 Program kreatif & edukatif</li>
                        <li>🌱 Fokus pada lingkungan & tanggung jawab</li>
                        <li>🤝 Kolaborasi antar keluarga</li>
                    </ul>
                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition">
                        Gabung Sekarang
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;