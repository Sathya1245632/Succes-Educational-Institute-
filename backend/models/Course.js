const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: {
        type: String,
        required: true,
    },
    duration: { type: String, required: false },
    syllabus: [{ type: String }],
    tools: [{ type: String }],
    placementSupport: { type: Boolean, default: true },
    description: { type: String },
    image: { type: String },
    price: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
