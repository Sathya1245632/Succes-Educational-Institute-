const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Course = require('./models/Course');

dotenv.config();

const newCourses = [
    {
        title: "BASIC OF \"C\"",
        category: "IT & Software",
        syllabus: ["Fundamentals", "Data Types & Variables", "Input & Output", "Operators", "Control Statement", "loops", "functions", "Arrays", "Strings", "pointers", "Structures and unions", "File handling"],
        placementSupport: false,
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "BASIC OF \"C++\"",
        category: "IT & Software",
        syllabus: ["c++ bascis", "Data Types & Variables", "Operators", "control statements", "Loops", "functions", "oops", "Inheritance", "polymorphism", "Encapsulation & Abstraction", "Arrays and Strings", "pointers & References", "Templates", "File handling"],
        placementSupport: false,
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "CORE \"JAVA\"",
        category: "IT & Software",
        syllabus: ["Java fundamentals", "Data types & varaiables", "operators", "Control statement", "Arrays", "Strings", "Oops", "Packages", "Exception Handling", "multi threading"],
        placementSupport: true,
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "CORE PYTHON",
        category: "IT & Software",
        syllabus: ["Python Bascis", "Varaiables", "Data types", "Operators", "control Flow", "Loops", "Data structures", "Functions", "Strings", "File handling", "Exception handling", "modules & packages", "Oops"],
        placementSupport: true,
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "JAVA FULLSTACK",
        category: "IT & Software",
        syllabus: ["Core java", "Sql", "JDBC", "Spring Boot", "Html", "Css", "javascript"],
        placementSupport: true,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "PYTHON FULLSTACK",
        category: "IT & Software",
        syllabus: ["core python", "Mysql", "Mongodb", "backend Framework/Django", "Html", "css", "javascript"],
        placementSupport: true,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "BASIC COMPUTER COUSRE BCC",
        category: "Basics of Computer",
        syllabus: ["Fundamentals of Computer", "Windows Updations", "Internet", "Word pad", "Computer Typing", "Note pad", "Ms Office (word,exel,powerpoint)"],
        placementSupport: false,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "ADVANCE IN \"MS-OFFICE\"",
        category: "Advance in MS Office",
        syllabus: ["(Basic to Advance)", "MS Word (Docx)", "Ms Excel (xlsx)", "Ms Power Point (pptx)", "Ms Outlook", "Ms Access (accdb)"],
        placementSupport: false,
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "DIP IN COMPUTER APPLICATION (DCA)",
        category: "DIP IN COMPUTER APPLICATION",
        syllabus: ["Basic of Computer", "Ms Office (Word, Excel, Powerpoint)", "Choice of: Tallyprime / C / C++ / Java / Python"],
        placementSupport: true,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "BASIC OF \"TALLY PRIME\" LV-1",
        category: "Basics of Computer",
        syllabus: ["Basic of Accounts", "Basic of Tally ERP9", "Introduction of Tallyprime", "Tally Software Download and installation", "Accounting in Tally", "Inventory in Tally", "Backup and Restore", "TallyVault Password & Security"],
        placementSupport: false,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "ADV OF \"TALLY PRIME\" LV-2",
        category: "Basics of Computer",
        syllabus: ["Basic of Tally Prime LV-1", "Debit & Credit Note", "Purchase & Sales Order Processing", "Value Added Tax (VAT)", "Goods and Services Tax (GST)", "Types of GST & HSN", "E-Way Bill", "E-Invoice"],
        placementSupport: false,
        image: "https://images.unsplash.com/photo-1454165833741-976e8d64161b?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "DIP \"TALLY PRIME\" LV-3",
        category: "Basics of Computer",
        syllabus: ["Basic of Tally Prime LV-1", "Basic of Tally Prime LV-2", "TDS & TCS", "GSTR (Returns)", "Bank Reconciliation (BRS)", "Payroll Management in Tally"],
        placementSupport: true,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        // Optionally clear existing courses if you want a fresh start, 
        // but user just said "add this courses", so I'll just insert them.
        await Course.insertMany(newCourses);
        console.log(`${newCourses.length} courses added successfully!`);

        mongoose.connection.close();
    } catch (err) {
        console.error('Error seeding database:', err);
    }
};

seedDB();
