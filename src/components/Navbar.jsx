// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Beranda', path: '/' },
        { name: 'Tentang', path: '/about' },
        { name: 'Kegiatan', path: '/activities' },
        { name: 'Galeri', path: '/gallery' },
        { name: 'Kontak', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition">
                    Puri Arraya
                </Link>

                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`capitalize font-medium transition hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-700' : 'text-gray-700'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md">
                    <div className="px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block capitalize font-medium py-2 border-b border-gray-100 last:border-0 ${location.pathname === link.path ? 'text-blue-700' : 'text-gray-700'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;