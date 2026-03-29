import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Award, Users, Briefcase, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const features = [
        { title: 'Industry Experts', desc: 'Learn from professionals with decades of experience.', icon: Users },
        { title: 'Project-Based Learning', desc: 'Apply knowledge to real-world engineering projects.', icon: Briefcase },
        { title: 'Global Certification', desc: 'Get recognized internationally for your skills.', icon: Globe },
        { title: 'Placement Assistance', desc: '100% support to help you land your dream job.', icon: Award },
    ];

    const categories = [
        { name: 'IT & Software', count: '12+ Courses', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97' },
        { name: 'Mechanical Design', count: '8+ Courses', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837' },
        { name: 'Embedded Systems', count: '6+ Courses', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475' },
        { name: 'Automation & PLC', count: '5+ Courses', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475' },
    ];

    return (
        <div>
            <Hero />

            {/* Why Choose Us */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-6 text-brand-900">Why Choose SUCCESS EDUCATION?</h2>
                        <p className="text-gray-600 text-lg">We provide industry-vetted technical training that bridges the gap between academic learning and real-world engineering requirements.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Overview */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Our Training Domains</h2>
                            <p className="text-gray-600 text-lg">Specialized programs tailored for modern industry needs.</p>
                        </div>
                        <Link to="/courses" className="text-brand-600 font-bold flex items-center hover:underline">
                            View All Courses <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <p className="text-brand-400 font-medium mb-1">{cat.count}</p>
                                    <h3 className="text-2xl font-bold">{cat.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section-padding bg-brand-900 text-white overflow-hidden relative">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-500 rounded-full blur-3xl opacity-20"></div>
                <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                            alt="Team collaboration"
                            className="rounded-3xl shadow-2xl relative z-10"
                        />
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-600 rounded-2xl flex flex-col items-center justify-center p-6 z-20 shadow-xl">
                            <span className="text-4xl font-bold">10+</span>
                            <span className="text-center text-sm font-medium">Years of Excellence</span>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold leading-tight">Empowering Engineers to Lead the Tech Revolution</h2>
                        <p className="text-brand-100 text-lg">
                            SUCCESS EDUCATION INSTITUTE is one of Coimbatore's premier technical training centers. We specialize in building careers through industry-aligned curriculum and hands-on practical sessions in IT, Mechanical, and Embedded domains.
                        </p>
                        <ul className="space-y-4">
                            {['Authorized Training Partner', 'Industry-led Curriculum', 'Modern Labs & Infrastructure'].map((item, i) => (
                                <li key={i} className="flex items-center space-x-3">
                                    <CheckCircle className="text-brand-400 w-6 h-6" />
                                    <span className="text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/about" className="inline-block bg-white text-brand-900 px-8 py-3 rounded-lg font-bold hover:bg-brand-50 transition-colors">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-center mb-16">What Our Students Say</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                                <div className="text-brand-600 text-4xl mb-4 font-serif">"</div>
                                <p className="text-gray-600 mb-6 italic">
                                    "The training at SUCCESS EDUCATION was a game-changer for my career. The instructors are extremely knowledgeable and the placement support is unmatched."
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-brand-200 rounded-full"></div>
                                    <div>
                                        <h4 className="font-bold">Rahul Sharma</h4>
                                        <p className="text-sm text-gray-500">Placed at Tata Motors</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding container-custom my-12">
                <div className="bg-brand-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Start Your Career Journey Today</h2>
                    <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto relative z-10">
                        Join thousands of successful students who have transformed their lives with our professional training programs.
                    </p>
                    <div className="flex justify-center space-x-4 relative z-10">
                        <Link to="/contact" className="bg-white text-brand-600 px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                            Contact Us Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
