import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <img src={logo} alt="Success Education" className="w-16 h-16 object-contain rounded-full" />
                        <h3 className="text-2xl font-bold uppercase tracking-wider">SUCCESS EDUCATION</h3>
                    </div>
                    <p className="text-gray-400">
                        Empowering the next generation of engineers and IT professionals with industry-leading training and placement support.
                    </p>
                    <div className="flex space-x-4">
                        <Facebook className="w-5 h-5 cursor-pointer hover:text-brand-400" />
                        <Twitter className="w-5 h-5 cursor-pointer hover:text-brand-400" />
                        <Linkedin className="w-5 h-5 cursor-pointer hover:text-brand-400" />
                        <Instagram className="w-5 h-5 cursor-pointer hover:text-brand-400" />
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6 text-brand-400">Quick Links</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/courses" className="hover:text-white transition-colors">Our Courses</Link></li>
                        <li><Link to="/placement" className="hover:text-white transition-colors">Placement</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6 text-brand-400">Popular Courses</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li>Full Stack Web Development</li>
                        <li>Mechanical CAD (SolidWorks/CATIA)</li>
                        <li>Embedded Systems & IoT</li>
                        <li>EV Design & Engineering</li>
                        <li>Industrial Automation (PLC/SCADA)</li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6 text-brand-400">Contact Info</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-brand-500 mt-1 flex-shrink-0" />
                            <span className="text-sm">
                                21, M L Lund Complex, 2nd floor, Variety Hall Road, Townhall, Coimbatore 641001.
                            </span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-brand-500 flex-shrink-0" />
                            <span className="text-sm">+91 78269 84675</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-brand-500 flex-shrink-0" />
                            <span className="text-sm">info@successeducation.in</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
                <p>&copy; {new Date().getFullYear()} SUCCESS EDUCATION INSTITUTE. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
