// src/pages/Contact.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const formRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            '.page-title',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );

        gsap.fromTo(
            formRef.current,
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top 80%',
                },
            }
        );

        gsap.fromTo(
            infoRef.current.querySelectorAll('.info-item'),
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                delay: 0.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: infoRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <section className="py-32 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center">
                <h1 className="page-title text-5xl md:text-6xl font-extrabold mb-6">Hubungi Kami</h1>
                <p className="max-w-2xl mx-auto text-lg opacity-90">
                    Punya pertanyaan? Ingin bergabung? Atau punya ide kegiatan? Kami siap mendengar!
                </p>
            </section>

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Form Kontak */}
                    <div ref={formRef} className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Nama Anda"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <textarea
                                rows="5"
                                placeholder="Pesan Anda"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                    {/* Info Kontak */}
                    <div ref={infoRef} className="space-y-8">
                        <h2 className="text-2xl font-bold text-gray-800">Informasi</h2>
                        <div className="space-y-6">
                            <div className="info-item flex items-start space-x-4">
                                <FaMapMarkerAlt className="text-blue-600 mt-1" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Alamat</h3>
                                    <p className="text-gray-600">Perumahan Puri Arraya, Blok C7, Kota Bandung</p>
                                </div>
                            </div>

                            <div className="info-item flex items-start space-x-4">
                                <FaPhone className="text-blue-600 mt-1" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Telepon</h3>
                                    <p className="text-gray-600">+62 812-3456-7890 (Ibu Siti)</p>
                                </div>
                            </div>

                            <div className="info-item flex items-start space-x-4">
                                <FaEnvelope className="text-blue-600 mt-1" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Email</h3>
                                    <p className="text-gray-600">komunitaspurarraya@gmail.com</p>
                                </div>
                            </div>

                            <div className="info-item flex items-start space-x-4">
                                <FaClock className="text-blue-600 mt-1" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Jam Operasional</h3>
                                    <p className="text-gray-600">Sabtu & Minggu: 08.00 - 17.00</p>
                                </div>
                            </div>
                        </div>

                        {/* Peta Sederhana (Placeholder) */}
                        <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
                            [Peta Lokasi akan ditampilkan di sini]
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;