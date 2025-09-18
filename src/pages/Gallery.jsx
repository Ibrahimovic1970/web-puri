// src/pages/Gallery.jsx
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import gambar dari folder assets
import gallery1 from '../assets/Image1.jpg';
import gallery2 from '../assets/Image1.jpg';
import gallery3 from '../assets/Image1.jpg';
import gallery4 from '../assets/Image1.jpg';
import gallery5 from '../assets/Image1.jpg';
import gallery6 from '../assets/Image1.jpg';

// Data galeri lengkap dengan detail
const galleryData = [
    {
        id: 1,
        title: 'Perkemahan Puri Arraya',
        date: '10 – 12 Maret 2024',
        location: 'Pantai Cipatujah, Bandung',
        description: 'Anak-anak berpartisipasi dalam kegiatan perkemahan selama 3 hari, belajar survival, kerja sama tim, dan menjaga lingkungan.',
        quote: '"Saya senang bisa tidur di tenda, meski hujan turun. Tapi kita tetap bersama!" — Arif, usia 10 tahun',
        image: gallery1,
    },
    {
        id: 2,
        title: 'Lomba Seni & Kreasi',
        date: '25 April 2024',
        location: 'Lapangan Perumahan Puri Arraya',
        description: 'Kegiatan kreatif yang memfasilitasi anak-anak untuk mengekspresikan diri melalui lukisan, origami, dan kerajinan tangan.',
        quote: '"Aku buat robot dari botol plastik! Guru bilang ini inovatif." — Dinda, usia 9 tahun',
        image: gallery2,
    },
    {
        id: 3,
        title: 'Fun Football Day',
        date: '18 Mei 2024',
        location: 'Lapangan Futsal Puri Arraya',
        description: 'Turnamen sepak bola antar kelompok anak-anak dengan aturan ramah dan penuh semangat olahraga.',
        quote: '"Saya jadi lebih percaya diri karena bisa jadi kapten tim!" — Budi, usia 11 tahun',
        image: gallery3,
    },
    {
        id: 4,
        title: 'Baca Cerita & Dongeng',
        date: '3 Juni 2024',
        location: 'Taman Baca Komunitas',
        description: 'Acara membaca bersama dengan narasi dongeng dari para orang tua dan relawan komunitas.',
        quote: '"Cerita tentang si anak kecil yang jago menyelesaikan masalah bikin aku ingin jadi seperti dia." — Nisa, usia 7 tahun',
        image: gallery4,
    },
    {
        id: 5,
        title: 'Edukasi Lingkungan',
        date: '15 Juli 2024',
        location: 'Hutan Kecil Puri Arraya',
        description: 'Program edukasi tentang daur ulang, pemilahan sampah, dan penanaman pohon oleh anak-anak dan warga.',
        quote: '"Aku bawa botol air sendiri sekarang, biar tidak sampah plastik lagi." — Raka, usia 8 tahun',
        image: gallery5,
    },
    {
        id: 6,
        title: 'Karya Anak-Anak: Expo 2024',
        date: '20 Agustus 2024',
        location: 'Aula Puri Arraya',
        description: 'Pameran karya seni, tulisan, dan hasil kerajinan anak-anak sebagai bentuk apresiasi terhadap kreativitas mereka.',
        quote: '"Orang tua saya bilang, karya saya bisa dipajang di museum!" — Lina, usia 10 tahun',
        image: gallery6,
    },
];

// Komponen Modal (didefinisikan di dalam halaman)
const GalleryModal = ({ isOpen, onClose, data }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            // Animasi saat modal muncul
            gsap.fromTo(
                modalRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            );
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Tombol Tutup */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-light"
                >
                    ×
                </button>

                {/* Gambar Besar */}
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-64 md:h-80 object-cover rounded-t-xl"
                />

                {/* Konten Detail */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">{data.title}</h3>
                    <div className="space-y-2 text-sm text-gray-600 mb-5">
                        <p><strong>Tanggal:</strong> {data.date}</p>
                        <p><strong>Lokasi:</strong> {data.location}</p>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">{data.description}</p>

                    {/* Kutipan Anak */}
                    <div className="border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-lg">
                        <p className="italic text-gray-800 text-lg">"{data.quote}"</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Halaman Utama Gallery
const Gallery = () => {
    const sectionRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    // Daftarkan plugin GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animasi saat halaman dimuat
    useEffect(() => {
        gsap.fromTo(
            '.page-title',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );

        // Animasi grid galeri saat discroll
        gsap.fromTo(
            sectionRef.current?.querySelectorAll('.gallery-item'),
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
            }
        );
    }, []);

    const openModal = (data) => {
        setSelectedImage(data);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Section */}
            <section className="py-32 bg-gradient-to-tr from-purple-600 to-pink-500 text-white text-center">
                <h1 className="page-title text-5xl md:text-6xl font-extrabold mb-6">Galeri Kegiatan</h1>
                <p className="max-w-2xl mx-auto text-lg opacity-90">
                    Kenangan indah anak-anak Puri Arraya saat bermain, belajar, dan tumbuh bersama.
                </p>
            </section>

            {/* Grid Galeri */}
            <section
                ref={sectionRef}
                className="container mx-auto px-6 py-20"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryData.map((item) => (
                        <div
                            key={item.id}
                            className="gallery-item overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 cursor-pointer group relative"
                            onClick={() => openModal(item)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-60 object-cover group-hover:blur-sm transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-semibold text-lg">Lihat Detail</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Modal Detail */}
            <GalleryModal
                isOpen={!!selectedImage}
                onClose={closeModal}
                data={selectedImage}
            />
        </div>
    );
};

export default Gallery;