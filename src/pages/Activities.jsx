// src/pages/Activities.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPaintBrush, FaFutbol, FaBookOpen, FaRecycle, FaMusic, FaTree } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const activities = [
    { icon: <FaPaintBrush />, title: 'Lukis & Kerajinan', time: 'Setiap Sabtu, 15.00' },
    { icon: <FaFutbol />, title: 'Fun Football', time: 'Minggu Pagi, 08.00' },
    { icon: <FaBookOpen />, title: 'Dongeng Mingguan', time: 'Sabtu Pagi, 09.00' },
    { icon: <FaRecycle />, title: 'Edukasi Lingkungan', time: 'Setiap Bulan' },
    { icon: <FaMusic />, title: 'Pelatihan Musik Mini', time: 'Jumat Sore, 16.00' },
    { icon: <FaTree />, title: 'Tanam Bersama', time: 'Bulanan' },
];

const Activities = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            '.page-title',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );

        gsap.fromTo(
            sectionRef.current.querySelectorAll('.activity-item'),
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <section className="py-32 bg-gradient-to-r from-green-600 to-blue-600 text-white text-center">
                <h1 className="page-title text-5xl md:text-6xl font-extrabold mb-6">Kegiatan Rutin</h1>
                <p className="max-w-2xl mx-auto text-lg opacity-90">
                    Setiap minggu, anak-anak berkumpul untuk bermain, belajar, dan berkarya bersama.
                </p>
            </section>

            {/* Daftar Kegiatan */}
            <section
                ref={sectionRef}
                className="container mx-auto px-6 py-20"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((act, i) => (
                        <div
                            key={i}
                            className="activity-item bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-l-4 border-blue-500"
                        >
                            <div className="text-blue-600 mb-4">{act.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{act.title}</h3>
                            <p className="text-blue-600 font-medium">{act.time}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Jadwal Ringkasan */}
            <section className="bg-white py-16">
                <div className="container mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-blue-900 mb-8">Jadwal Mingguan</h2>
                    <div className="bg-blue-50 p-6 rounded-xl">
                        <p className="text-lg text-gray-700">
                            <strong>Setiap Sabtu:</strong> Lukis & Dongeng<br />
                            <strong>Setiap Minggu:</strong> Fun Football & Tanam Bersama<br />
                            <strong>Jumat Sore:</strong> Musik & Kreasi
                        </p>
                        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition">
                            Unduh Jadwal PDF
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Activities;