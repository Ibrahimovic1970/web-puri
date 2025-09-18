// src/pages/About.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaUsers, FaHandsHelping, FaStar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        // Animasi judul saat masuk
        gsap.fromTo(
            '.page-title',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );

        // Animasi card misi & visi
        gsap.fromTo(
            sectionRef.current.querySelectorAll('.feature-card'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
            }
        );
    }, []);

    const features = [
        {
            icon: <FaUsers className="text-4xl text-blue-600" />,
            title: 'Komunitas Anak',
            desc: 'Wadah bagi anak-anak perumahan untuk tumbuh bersama dalam lingkungan positif.',
        },
        {
            icon: <FaHandsHelping className="text-4xl text-blue-600" />,
            title: 'Gotong Royong',
            desc: 'Kami mengedepankan nilai kebersamaan dan kerja sama antar warga.',
        },
        {
            icon: <FaStar className="text-4xl text-blue-600" />,
            title: 'Kreativitas & Aktivitas',
            desc: 'Beragam kegiatan seru yang memicu kreativitas dan rasa percaya diri.',
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <section className="py-32 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center">
                <h1 className="page-title text-5xl md:text-6xl font-extrabold mb-6">Tentang Kami</h1>
                <p className="max-w-2xl mx-auto text-lg opacity-90">
                    Komunitas Puri Arraya adalah rumah kedua bagi anak-anak perumahan — tempat mereka belajar, bermain, dan tumbuh bersama.
                </p>
            </section>

            {/* Visi & Misi */}
            <section
                ref={sectionRef}
                className="container mx-auto px-6 py-24"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feat, i) => (
                        <div
                            key={i}
                            className="feature-card bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition transform hover:-translate-y-2"
                        >
                            <div className="flex justify-center mb-4">{feat.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{feat.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Deskripsi Tambahan */}
            <section className="px-6 py-16 bg-white">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-6">Sejarah Singkat</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Komunitas Puri Arraya berdiri pada tahun 2022 atas inisiatif beberapa orang tua yang ingin menciptakan ruang aman
                        dan menyenangkan bagi anak-anak setelah pulang sekolah.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Dengan dukungan warga, kami mulai mengadakan kegiatan mingguan seperti seni, olahraga, dan baca cerita —
                        hingga kini menjadi komunitas aktif dengan lebih dari 50 anak terlibat.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;