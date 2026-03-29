import React, { useState, useEffect } from 'react';
import api from '../api/config';
import { LayoutDashboard, Users, BookOpen, MessageSquare, ChevronRight, CheckCircle, Clock } from 'lucide-react';

const AdminDashboard = () => {
    const [inquiries, setInquiries] = useState([]);
    const [courses, setCourses] = useState([]);
    const [activeTab, setActiveTab] = useState('inquiries');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [inqRes, courseRes] = await Promise.all([
                    api.get('/api/inquiries'),
                    api.get('/api/courses')
                ]);
                setInquiries(inqRes.data);
                setCourses(courseRes.data);
            } catch (err) {
                console.error('Error fetching admin data', err);
            }
        };
        fetchData();
    }, []);

    const updateStatus = async (id, status) => {
        try {
            await api.patch(`/api/inquiries/${id}`, { status });
            setInquiries(inquiries.map(inq => inq._id === id ? { ...inq, status } : inq));
        } catch (err) {
            console.error('Error updating status', err);
        }
    };

    return (
        <div className="pt-20 min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-lg hidden md:block">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-brand-900">Admin Panel</h2>
                </div>
                <nav className="mt-4 px-4 space-y-2">
                    <button
                        onClick={() => setActiveTab('inquiries')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'inquiries' ? 'bg-brand-600 text-white shadow-md' : 'text-gray-600 hover:bg-brand-50'}`}
                    >
                        <MessageSquare className="w-5 h-5" />
                        <span>Inquiries</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('courses')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'courses' ? 'bg-brand-600 text-white shadow-md' : 'text-gray-600 hover:bg-brand-50'}`}
                    >
                        <BookOpen className="w-5 h-5" />
                        <span>Manage Courses</span>
                    </button>
                </nav>
            </div>

            {/* Content */}
            <div className="flex-grow p-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 capitalize">{activeTab}</h1>
                        <div className="flex space-x-4">
                            <div className="bg-white px-6 py-3 rounded-xl shadow-sm">
                                <span className="text-sm font-semibold text-gray-500 block">Total Inquiries</span>
                                <span className="text-2xl font-bold">{inquiries.length}</span>
                            </div>
                            <div className="bg-white px-6 py-3 rounded-xl shadow-sm">
                                <span className="text-sm font-semibold text-gray-500 block">Active Courses</span>
                                <span className="text-2xl font-bold">{courses.length}</span>
                            </div>
                        </div>
                    </div>

                    {activeTab === 'inquiries' && (
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-gray-700">Student Name</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Course / Type</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Date</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Status</th>
                                        <th className="px-6 py-4 font-bold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {inquiries.map((inq) => (
                                        <tr key={inq._id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-6">
                                                <div className="font-bold text-gray-900">{inq.name}</div>
                                                <div className="text-sm text-gray-500">{inq.email} | {inq.phone}</div>
                                            </td>
                                            <td className="px-6 py-6">
                                                <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase">
                                                    {inq.type}
                                                </span>
                                                <div className="text-sm text-gray-600 mt-1 truncate max-w-xs">{inq.message}</div>
                                            </td>
                                            <td className="px-6 py-6 text-gray-500 text-sm">
                                                {new Date(inq.createdAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-6">
                                                <span className={`flex items-center space-x-2 text-sm font-bold ${inq.status === 'Pending' ? 'text-amber-500' : inq.status === 'Contacted' ? 'text-blue-500' : 'text-green-500'}`}>
                                                    {inq.status === 'Pending' ? <Clock className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                                                    <span>{inq.status}</span>
                                                </span>
                                            </td>
                                            <td className="px-6 py-6 text-right">
                                                <select
                                                    value={inq.status}
                                                    onChange={(e) => updateStatus(inq._id, e.target.value)}
                                                    className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500/20"
                                                >
                                                    <option value="Pending">Pending</option>
                                                    <option value="Contacted">Contacted</option>
                                                    <option value="Closed">Closed</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {inquiries.length === 0 && (
                                <div className="p-20 text-center text-gray-500">No inquiries yet.</div>
                            )}
                        </div>
                    )}

                    {activeTab === 'courses' && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {courses.map(course => (
                                <div key={course._id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex items-center space-x-6">
                                    <img src={course.image} alt="" className="w-20 h-20 rounded-xl object-cover" />
                                    <div className="flex-grow">
                                        <h4 className="font-bold text-lg">{course.title}</h4>
                                        <p className="text-sm text-gray-500">{course.category} | {course.duration}</p>
                                    </div>
                                    <button className="text-brand-600 font-bold hover:underline">Edit</button>
                                </div>
                            ))}
                            <div className="border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-8 text-gray-400 hover:border-brand-500 hover:text-brand-500 cursor-pointer transition-all">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <span className="font-bold">Add New Course</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
