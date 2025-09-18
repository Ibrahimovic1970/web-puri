// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Puri Arraya Community</h3>
                <p className="mb-6 text-blue-100">
                    Membangun kebersamaan anak-anak perumahan melalui kegiatan positif.
                </p>
                <div className="flex justify-center space-x-6 text-2xl mb-6">
                    <a href="#" className="hover:text-blue-300 transition"><FaFacebook /></a>
                    <a href="#" className="hover:text-blue-300 transition"><FaInstagram /></a>
                    <a href="#" className="hover:text-blue-300 transition"><FaEnvelope /></a>
                </div>
                <p className="text-sm text-blue-200">
                    &copy; {new Date().getFullYear()} Komunitas Puri Arraya. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;