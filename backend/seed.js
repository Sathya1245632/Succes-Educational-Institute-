const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');

dotenv.config();

const courses = [
    {
        title: 'Full Stack Web Development',
        category: 'IT & Software',
        duration: '6 Months',
        syllabus: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
        tools: ['VS Code', 'Git', 'Docker'],
        placementSupport: true,
        description: 'Master complete web development from scratch.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085'
    },
    {
        title: 'Machine Learning with Python',
        category: 'IT & Software',
        duration: '4 Months',
        syllabus: ['Numpy', 'Pandas', 'Matplotlib', 'Scikit-Learn', 'TensorFlow'],
        tools: ['Jupyter', 'PyCharm'],
        placementSupport: true,
        description: 'Learn to build predictive models and AI solutions.',
        image: 'https://images.unsplash.com/photo-1555949963-aa291f586c66'
    },
    {
        title: 'CAD Design - CATIA & SolidWorks',
        category: 'Mechanical Design',
        duration: '3 Months',
        syllabus: ['2D Drafting', '3D Modeling', 'Assembly', 'Simulation'],
        tools: ['CATIA', 'SolidWorks'],
        placementSupport: true,
        description: 'Professional mechanical design training.',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837'
    }
];

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('Connected to MongoDB for seeding...');
        await Course.deleteMany({});
        await Course.insertMany(courses);
        console.log('Seeding completed!');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
