import React, { useState } from 'react';
import { Search, ShieldCheck, AlertCircle } from 'lucide-react';

const CertificateVerification = () => {
    const [certId, setCertId] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleVerify = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate verification
        setTimeout(() => {
            if (certId === 'TE-2026-1001') {
                setResult({
                    status: 'Valid',
                    name: 'Aditya Varma',
                    course: 'Full Stack Development',
                    date: 'Feb 15, 2026',
                    grade: 'A+'
                });
            } else {
                setResult({ status: 'Invalid' });
            }
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="pt-24 min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
            <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-brand-900 p-12 text-center text-white">
                    <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-brand-400" />
                    <h1 className="text-3xl font-bold">Certificate Verification</h1>
                    <p className="text-brand-300 mt-2">Enter your certificate ID to verify the authenticity of your training.</p>
                </div>

                <div className="p-12">
                    <form onSubmit={handleVerify} className="flex space-x-4 mb-12">
                        <div className="relative flex-grow">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-brand-500 outline-none"
                                placeholder="Ex: TE-2026-1001"
                                value={certId}
                                onChange={(e) => setCertId(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-brand-600 text-white px-8 rounded-xl font-bold hover:bg-brand-700 transition-all disabled:opacity-50"
                        >
                            {loading ? 'Verifying...' : 'Verify'}
                        </button>
                    </form>

                    {result && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-8 rounded-2xl border-2 ${result.status === 'Valid' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
                        >
                            {result.status === 'Valid' ? (
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2 text-green-700 font-bold text-xl">
                                        <ShieldCheck className="w-6 h-6" />
                                        <span>Verified Certificate Found</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-500 block uppercase tracking-wider">Student Name</span>
                                            <span className="font-bold text-lg">{result.name}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block uppercase tracking-wider">Course</span>
                                            <span className="font-bold text-lg">{result.course}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block uppercase tracking-wider">Issue Date</span>
                                            <span className="font-bold text-lg">{result.date}</span>
                                        </div>
                                        <div>
                                            <span className="text-gray-500 block uppercase tracking-wider">Grade</span>
                                            <span className="font-bold text-lg text-brand-600">{result.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2 text-red-700 font-bold">
                                    <AlertCircle className="w-6 h-6" />
                                    <span>No such certificate ID found in our records.</span>
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
            <p className="mt-8 text-gray-400 text-sm">SUCCESS EDUCATION INSTITUTE Verification System v2.0</p>
        </div>
    );
};

export default CertificateVerification;
