import React, { useState, useEffect } from 'react';
import api from '../api/config';
import { motion } from 'framer-motion';
import { Search, Clock, Award, CheckCircle, ChevronRight } from 'lucide-react';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await api.get('/api/courses');
                setCourses(res.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching courses:', err);
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const categories = ['All', 'IT & Software', 'Basics of Computer', 'Advance in MS Office', 'DIP IN COMPUTER APPLICATION', 'Automation & PLC'];

    const filteredCourses = filter === 'All'
        ? courses
        : courses.filter(c => c.category === filter);

    return (
        <div className="pt-24 min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-brand-900 py-16 text-white text-center">
                <div className="container-custom">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Training Programs</h1>
                    <p className="text-brand-200 text-lg max-w-2xl mx-auto">Explore our industry-vetted courses designed to make you industry-ready from day one.</p>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${filter === cat
                                ? 'bg-brand-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-brand-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Course Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"></div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <motion.div
                                layout
                                key={course._id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
                            >
                                <div className="h-56 relative overflow-hidden">
                                    <img src={course.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'} alt={course.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {course.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow space-y-4">
                                    <h3 className="text-2xl font-bold">{course.title}</h3>
                                    <div className="flex items-center text-gray-500 space-x-4">
                                        {course.placementSupport && (
                                            <div className="flex items-center text-green-600">
                                                <Award className="w-4 h-4 mr-2" />
                                                <span className="font-medium">100% Placement Guarantee</span>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2">Key Topics:</h4>
                                        <ul className="space-y-1">
                                            {course.syllabus?.slice(0, 8).map((item, i) => (
                                                <li key={i} className="flex items-center text-gray-600 text-sm">
                                                    <CheckCircle className="w-4 h-4 mr-2 text-brand-500" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-4 mt-auto">
                                        <button className="w-full bg-brand-600 text-white py-3 rounded-xl font-bold flex items-center justify-center hover:bg-brand-700 transition-colors">
                                            View Syllabus <ChevronRight className="ml-2 w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {!loading && filteredCourses.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-gray-500">No courses found in this category.</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Courses;
