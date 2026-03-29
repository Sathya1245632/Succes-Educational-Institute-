import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Cpu, Settings, GraduationCap } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Placement', path: '/placement' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2' : 'bg-transparent py-4 text-white'}`}>
            <div className="container-custom flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-3">
                    <img src={logo} alt="Success Education Institute" className="w-12 h-12 object-contain rounded-full" />
                    <span className={`text-xl font-bold uppercase tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>Success Education Institute</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`font-medium hover:text-brand-500 transition-colors ${location.pathname === link.path
                                ? (scrolled ? 'text-brand-700' : 'text-brand-300')
                                : (scrolled ? 'text-gray-700' : 'text-white')
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-500/50">
                        Apply Now
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-gray-900' : 'text-white'}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden glass absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-700 font-medium hover:text-brand-600"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-brand-600 text-white text-center py-2 rounded-lg">
                            Apply Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
