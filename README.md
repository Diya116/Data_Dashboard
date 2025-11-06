# User Management Dashboard

A full-stack web application for managing users with an interactive dashboard, built with React, TypeScript, Express, and MongoDB.

##  Overview

This project is a comprehensive user management system that provides:

- **User Authentication**: Secure login system with protected routes
- **User Management**: Create, read, update, and delete user records
- **Interactive Dashboard**: Visual representation of user data with charts and statistics
- **Data Visualization**: Real-time charts including bar charts, line charts, and pie charts using Chart.js
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **Theme Support**: Dark/Light mode toggle
- **Advanced Filtering**: Search, filter, and sort users with pagination support

### Tech Stack

**Frontend:**
- React 19 with TypeScript
- Vite (Build tool)
- React Router (Navigation)
- Chart.js & React-Chartjs-2 (Data visualization)
- Tailwind CSS (Styling)
- Axios (HTTP client)
- Lucide React (Icons)

**Backend:**
- Node.js with Express
- TypeScript
- MongoDB with Mongoose (Database)
- CORS (Cross-Origin Resource Sharing)

##  Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud version)

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd consult_anubhav
```

### Step 2: Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```bash
# Create .env file
New-Item -Path .env -ItemType File
```

4. Add the following environment variables to `.env`:
```env
MONGODB_URI=mongodb://localhost:27017/your_database_name
PORT=5050
```

> **Note**: If using MongoDB Atlas, replace the `MONGODB_URI` with your Atlas connection string.

5. Start the backend development server:
```bash
npm run dev
```

The backend server will start on `http://localhost:5050`

### Step 3: Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm run dev
```

The frontend application will start on `http://localhost:5173`

### Step 4: Access the Application

Open your browser and navigate to:
```
http://localhost:5173
```


##  Available Scripts

### Backend

- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run production server
- `npm run type-check` - Check TypeScript types without compiling

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Endpoints

### Authentication
- `POST /auth/login` - User login

### Users
- `GET /api/user` - Get all users
- `POST /api/user` - Create new user
- `PUT /api/user/:id` - Update user
- `DELETE /api/user/:id` - Delete user

### Statistics
- `GET /api/stats` - Get dashboard statistics

##  Features

- User authentication and authorization
- CRUD operations for user management
- Real-time data visualization
-  Responsive design for mobile and desktop
- Search and filter functionality
-  Pagination for large datasets
- Dark/Light theme toggle
-  Protected routes
-  Loading states and error handling


