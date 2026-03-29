import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center overflow-hidden bg-gray-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80"
                    alt="Engineering background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
            </div>

            <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-block px-4 py-1 rounded-full bg-brand-600/20 border border-brand-500/30 text-brand-400 text-sm font-semibold mb-2">
                        Leading Technical Excellence
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                        Elevate Your <span className="text-brand-500">Engineering</span> Career
                    </h1>
                    <p className="text-xl text-gray-300 max-w-xl">
                        Join the most premium technical training company in India. Industry-vetted courses in IT, Mechanical Design, and Automation.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center transition-all group">
                            Explore Courses
                            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-lg font-bold text-lg flex items-center transition-all">
                            <Play className="mr-2 fill-current" />
                            Watch Video
                        </button>
                    </div>

                    <div className="flex items-center space-x-8 pt-8 border-t border-white/10">
                        <div>
                            <div className="text-3xl font-bold text-white">5000+</div>
                            <div className="text-gray-400">Students Trained</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">150+</div>
                            <div className="text-gray-400">Hiring Partners</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white">95%</div>
                            <div className="text-gray-400">Placement Rate</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block"
                >
                    <div className="relative">
                        <div className="absolute -inset-4 bg-brand-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
                            alt="Training session"
                            className="relative rounded-2xl shadow-2xl border border-white/10"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
