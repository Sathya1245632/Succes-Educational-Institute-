import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, LogIn } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // For demo purposes, we allow any login or simple check
        if (formData.username === 'admin' && formData.password === 'admin123') {
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin');
        } else {
            alert('Invalid credentials! (Try admin / admin123)');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-brand-900 p-12 text-center text-white">
                    <h2 className="text-3xl font-bold">Admin Portal</h2>
                    <p className="text-brand-300 mt-2">Sign in to manage your training platform</p>
                </div>
                <form onSubmit={handleLogin} className="p-12 space-y-8">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Username</label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                required
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-brand-500 outline-none transition-all"
                                placeholder="Enter username"
                                value={formData.username}
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="password"
                                required
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-brand-500 outline-none transition-all"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all shadow-lg shadow-brand-500/30"
                    >
                        <LogIn />
                        <span>Login Now</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
