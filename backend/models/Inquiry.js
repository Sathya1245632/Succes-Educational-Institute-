const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    course: { type: String }, // Optional: if from a course page
    message: { type: String, required: true },
    type: {
        type: String,
        enum: ['Contact', 'Course Inquiry', 'Internship Application'],
        default: 'Contact'
    },
    status: {
        type: String,
        enum: ['Pending', 'Contacted', 'Closed'],
        default: 'Pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);
