# Deployment Guide

This project is structured for easy deployment on Vercel (Frontend) and Render/Heroku (Backend).

## 1. Backend Deployment (Render / Heroku)

1. **MongoDB Atlas**:
   - Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Get your Connection String.
   - Whitelist all IPs (0.0.0.0/0) or Render's outbound IPs.

2. **Setup on Render**:  
   - Create a new Web Service.
   - Connect your GitHub repository.
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - **Environment Variables**:
     - `MONGODB_URI`: Your Atlas connection string
     - `JWT_SECRET`: A long random string
     - `PORT`: 10000 (usually default)

## 2. Frontend Deployment (Vercel)

1. **Repository Settings**:
   - Create a new project on Vercel.
   - Root Directory: `frontend`
   - Framework Preset: `Vite`

2. **API Configuration**:
   - In `frontend/src/pages/Courses.jsx`, `Contact.jsx`, etc., update the base URL from `http://localhost:5000` to your Render backend URL.
   - Tip: Use an environment variable `VITE_API_URL` for this.

3. **Build & Deploy**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Add `VITE_API_URL` to Vercel Environment Variables.

## 3. Production Readiness Checklist
- [ ] Change all `localhost:5000` to production API URL.
- [ ] Enable CORS for the production frontend URL in `backend/server.js`.
- [ ] Set `NODE_ENV` to `production`.
- [ ] Secure JWT secret and MongoDB URI.
