📖 **BranchForge**
A full-stack quiz application with CI/CD integration


**📌 Table of Contents**
About the Project
Features
Tech Stack
Installation
Running the Application
Testing
Project Structure
Contributing
Contact

📖 **About the Project**
BranchForge is an interactive quiz application built with React, Node.js, and MongoDB. It allows users to take quizzes dynamically with multiple-choice questions. The application is fully tested with Cypress and features continuous integration (CI) and deployment (CD) using GitHub Actions and Render.

🎯 **Features**
✅ Interactive and dynamic quiz interface
✅ Backend API that fetches random questions from a database
✅ Supports multiple-choice questions with score tracking
✅ Fully tested with Cypress component & end-to-end (E2E) testing
✅ CI/CD pipeline with GitHub Actions and automatic deployment via Render
✅ TypeScript support for improved maintainability

🛠️ **Tech Stack**
Frontend
React
Vite
React Bootstrap
TypeScript
Backend
Node.js
Express.js
MongoDB

⚡ **Installation**
1️⃣ Clone the Repository

git clone https://github.com/your-username/BranchForge.git
cd BranchForge

2️⃣ **Install Dependencies**

npm install
cd client && npm install
cd ../server && npm install

3️⃣ **Set Up Environment Variables**
Create a .env file inside the server/ directory and add:

MONGODB_URI=mongodb://localhost:27017/branchforge
Make sure MongoDB is installed and running.

4️⃣ **Seed the Database**

cd server
npm run seed

📂 **Project Structure**
BranchForge/
│── client/         # React frontend
│   ├── src/        # React components, assets, API services
│   ├── public/     # Static files
│   ├── vite.config.ts # Frontend configuration
│── server/         # Express backend
│   ├── src/        # API routes, controllers, database models
│   ├── config/     # MongoDB connection
│   ├── routes/     # API endpoints
│── cypress/        # Cypress testing
│── .github/        # GitHub Actions workflows
│── README.md       # Project documentation
│── package.json    # Project dependencies

📩 **Contact**
💡 Have questions or suggestions? Reach out:
📧 **Email**: nusradinov04@icloud.com
🔗 **GitHub**: https://github.com/Khalilnusradinov