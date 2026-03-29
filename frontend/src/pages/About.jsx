import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Shield, Zap, TrendingUp } from 'lucide-react';

const About = () => {
    const values = [
        { title: 'Quality First', desc: 'We never compromise on the quality of training and curriculum.', icon: Shield },
        { title: 'Innovation', desc: 'Stay ahead with the latest tools and engineering techniques.', icon: Zap },
        { title: 'Student Success', desc: 'Our success is measured by the growth of our graduates.', icon: TrendingUp },
    ];

    const team = [
        { name: 'Dr. Ramesh Kumar', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
        { name: 'Sonia Sharma', role: 'Head of IT Training', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
        { name: 'Vijay Singh', role: 'Lead Mechanical Consultant', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e' },
    ];

    return (
        <div className="pt-20">
            {/* Hero about */}
            <section className="section-padding bg-brand-900 text-white relative overflow-hidden">
                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Shaping the Future <br /> of <span className="text-brand-500">Industry Leaders</span>
                    </motion.h1>
                    <p className="text-xl text-brand-200 max-w-2xl mx-auto">
                        With over a decade of excellence in technical training, we are committed to bridging the gap between education and industry.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding">
                <div className="container-custom grid md:grid-cols-2 gap-12">
                    <div className="bg-brand-50 p-12 rounded-3xl border border-brand-100">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 mb-8 shadow-sm">
                            <Target className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            To provide world-class technical education and engineering services that empower students and industries to innovate, compete, and excel in the global market.
                        </p>
                    </div>
                    <div className="bg-gray-900 p-12 rounded-3xl text-white">
                        <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-sm">
                            <Eye className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            To be the global leader in technical skill development and engineering consulting, recognized for our commitment to quality, integrity, and student success.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Core Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6">
                                    <v.icon />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                                <p className="text-gray-600">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-center mb-16">Leadership Team</h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {team.map((m, i) => (
                            <div key={i} className="group">
                                <div className="relative overflow-hidden rounded-3xl mb-6">
                                    <img src={m.image} alt={m.name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 to-transparent"></div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">{m.name}</h3>
                                <p className="text-brand-600 font-semibold">{m.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
