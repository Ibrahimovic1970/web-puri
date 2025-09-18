// src/components/GallerySection.jsx
import React, { useState, useRef, useEffect } from 'react';
import { staggerGrid } from '../styles/animations';
import gallery1 from '../assets/Image1.jpg';
import gallery2 from '../assets/Image1.jpg';
import gallery3 from '../assets/Image1.jpg';
import gallery4 from '../assets/Image1.jpg';

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const gridRef = useRef(null);

    const images = [gallery1, gallery2, gallery3, gallery4];

    useEffect(() => {
        const items = gridRef.current?.querySelectorAll('.gallery-item');
        if (items?.length > 0) {
            staggerGrid(Array.from(items), { dur: 0.6, delay: 0.2, stagger: 0.2 });
        }
    }, []);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-blue-900 mb-12">Galeri Kegiatan</h2>
                <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
                    Kenangan indah anak-anak Puri Arraya saat bermain, belajar, dan tumbuh bersama.
                </p>

                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="gallery-item overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 cursor-pointer relative group"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img}
                                alt={`Galeri ${i + 1}`}
                                className="w-full h-60 object-cover group-hover:blur-sm transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white font-semibold">Lihat Foto</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative max-w-3xl w-full">
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                                className="absolute top-4 right-4 text-white text-3xl"
                            >
                                ×
                            </button>
                            <img
                                src={selectedImage}
                                alt="Detail"
                                className="w-full h-auto max-h-[80vh] object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;