# Success Educational Institute

A comprehensive, modern educational platform designed for Success Educational Institute. This project provides a full-stack solution for managing courses, student inquiries, certificate verification, and administrative tasks.

## 🚀 Key Features

- **Course Management**: Detailed course listings with categories and easy navigation.
- **Student Dashboard**: Personalized dashboard for students (Admin features included).
- **Certificate Verification**: Quick and secure verification of student certificates.
- **Admin Panel**: Backend tools for managing courses, students, and placements.
- **AI Integration**: Powered by OpenAI for intelligent responses and automated tasks.
- **Secure Authentication**: JWT-based login and session management.
- **Responsive Design**: Fully optimized for both desktop and mobile users.

## 🛠️ Technology Stack

### Frontend
- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Hooks & Context API
- **Styling**: Tailwind CSS / Custom CSS

### Backend
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **AI**: [OpenAI API](https://openai.com/)
- **Security**: JWT (JSON Web Tokens) & Dotenv

## 📂 Project Structure

```bash
├── backend/            # Express API, MongoDB models, and AI logic
│   ├── .env            # Environment variables (Ignored by git)
│   ├── server.js       # Main entry point for the backend
│   └── ...
├── frontend/           # React application (Vite template)
│   ├── src/            # Source code (Components, Pages, Assets)
│   ├── public/         # Static assets
│   └── ...
├── DEPLOYMENT.md       # Detailed guide for deploying to Render/Vercel
└── .gitignore          # Files excluded from version control
```

## ⚙️ Setup & Installation

### Prerequisites
- Node.js (v16+)
- MongoDB Atlas account (or local MongoDB)
- OpenAI API Key

### 1. Clone the repository
```bash
git clone https://github.com/Sathya1245632/Succes-Educational-Institute-.git
cd Success-Educational-Institute-
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create a .env file based on .env.example
# Add your MONGODB_URI and OPENAI_API_KEY
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

## 🌍 Deployment

Refer to the [DEPLOYMENT.md](DEPLOYMENT.md) file for a step-by-step guide on deploying the backend to **Render** and the frontend to **Vercel**.

## 📄 License
This project is private and intended for use by Success Educational Institute.
