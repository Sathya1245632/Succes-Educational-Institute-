const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const inquiryRoutes = require('./routes/inquiries');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
const corsOptions = {
    origin: function (origin, callback) {
        const allowedOrigins = [
            'https://your-academy.vercel.app',  // Your production frontend
            'http://localhost:5173',             // Local Vite dev
            'http://localhost:3000',              // Alternative local port
            process.env.CORS_ORIGIN                // From environment variable
        ];

        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Health Check
app.get('/', (req, res) => {
    res.status(200).json({ status: 'Backend is running successfully!' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/inquiries', inquiryRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
