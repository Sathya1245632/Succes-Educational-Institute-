import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Building2, Users, Star } from 'lucide-react';

const Placement = () => {
    const stats = [
        { label: 'Placements', value: '4500+', icon: Trophy },
        { label: 'Partners', value: '150+', icon: Building2 },
        { label: 'Avg Package', value: '5.5 LPA', icon: Star },
        { label: 'Max Package', value: '18 LPA', icon: Users },
    ];

    return (
        <div className="pt-20">
            <section className="bg-brand-900 py-24 text-white">
                <div className="container-custom text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Placement Success</h1>
                    <p className="text-xl text-brand-200 max-w-3xl mx-auto">
                        Our dedicated placement cell works tirelessly to connect our students with top-tier global companies.
                    </p>
                </div>
            </section>

            {/* Stats Counter */}
            <section className="py-12 -mt-16 relative z-10">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
                                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-4">
                                    <s.icon className="w-6 h-6" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-1">{s.value}</div>
                                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Corporate Partners */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-center mb-16">Ouring Hiring Partners</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                            <div key={i} className="grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100 flex items-center justify-center p-8 bg-gray-50 rounded-xl border border-transparent hover:border-brand-200">
                                <div className="w-full h-12 bg-gray-300 rounded animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                                <img
                                    src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                    alt="Student"
                                    className="w-24 h-24 rounded-full border-4 border-brand-100 mb-6"
                                />
                                <h4 className="text-xl font-bold mb-1">Ananya Gupta</h4>
                                <p className="text-brand-600 font-semibold mb-6 uppercase text-sm tracking-widest leading-none">Embedded Engineer</p>
                                <div className="bg-brand-50 px-4 py-2 rounded-lg font-bold text-brand-900 mb-6 w-full">Placed at Robert Bosch</div>
                                <p className="text-gray-600 italic">
                                    "The intensive training and mock interviews helped me build confidence. I'm now working in my dream domain thanks to SUCCESS EDUCATION."
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Placement;
