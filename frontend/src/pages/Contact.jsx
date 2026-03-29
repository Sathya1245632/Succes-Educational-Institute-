import React, { useState } from 'react';
import api from '../api/config';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        type: 'Contact'
    });
    const [status, setStatus] = useState({ type: '', msg: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/api/inquiries', formData);
            setStatus({ type: 'success', msg: 'Thank you! Your message has been sent successfully.' });
            setFormData({ name: '', email: '', phone: '', message: '', type: 'Contact' });
        } catch (err) {
            setStatus({ type: 'error', msg: 'Something went wrong. Please try again later.' });
        }
    };

    return (
        <div className="pt-24 bg-gray-50">
            <div className="bg-brand-900 py-20 text-white">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                    <p className="text-brand-200 text-lg max-w-2xl">Have questions? We're here to help you choose the right path for your career.</p>
                </div>
            </div>

            <div className="container-custom py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Locate Us</h4>
                                        <p className="text-gray-600 italic">SUCCESS EDUCATION INSTITUTE</p>
                                        <p className="text-gray-600">21, M L Lund Complex, 2nd floor, Variety Hall Road, Townhall, Coimbatore 641001.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Call Us</h4>
                                        <p className="text-gray-600">+91 78269 84675</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-100 p-3 rounded-lg text-brand-600">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Email Us</h4>
                                        <p className="text-gray-600">info@successeducation.in</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t space-y-4">
                                <a
                                    href="https://wa.me/917826984675"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 hover:bg-green-600 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg"
                                >
                                    <MessageCircle />
                                    <span>Chat on WhatsApp</span>
                                </a>
                                <a
                                    href="https://maps.app.goo.gl/C3H7tEEfsqvqgLcu5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 hover:bg-blue-700 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all shadow-lg"
                                >
                                    <MapPin />
                                    <span>Open in Google Maps</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>

                            {status.msg && (
                                <div className={`p-4 rounded-lg mb-6 ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {status.msg}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700">Message</label>
                                    <textarea
                                        rows="5"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-brand-600 hover:bg-brand-700 text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all w-full md:w-auto shadow-lg"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-16 bg-gray-200 rounded-2xl h-80 overflow-hidden relative border-4 border-white shadow-xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4251214352164!2d76.95874417570498!3d10.999120954910237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8596666ec484d%3A0xe54dbe059f109b0b!2sVariety%20Hall%20Rd%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
