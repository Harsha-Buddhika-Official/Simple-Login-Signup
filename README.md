# Simple Login & Signup System

A full-stack web application featuring user authentication with login and signup functionality. Built with React (frontend) and Node.js/Express (backend), using MongoDB for data storage.

## Features

- **User Registration**: New users can create accounts with name, email, and password
- **User Login**: Existing users can authenticate with email and password
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Route Protection**: Client-side routing with React Router
- **RESTful API**: Backend API for user authentication
- **MongoDB Integration**: User data stored in MongoDB database

## Tech Stack

### Frontend (Client)
- **React 19** - UI framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Lucide React** - Icon library

### Backend (Server)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## Project Structure

```
├── Client/                 # Frontend React application
│   ├── src/
│   │   ├── App.jsx        # Main app component with routing
│   │   ├── Login.jsx      # Login page component
│   │   ├── SignUp.jsx     # Registration page component
│   │   ├── Home.jsx       # Home page (after login)
│   │   ├── WelcomePage.jsx # Landing page
│   │   └── authService.jsx # Authentication service
│   └── package.json
│
└── Server/                 # Backend API server
    ├── index.js           # Main server file
    ├── employee/
    │   └── Employee.js    # User model schema
    └── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

## Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd Simple-Login---Signup
```

### 2. Setup Backend Server
```bash
cd Server
npm install
npm start
```
The server will run on `http://localhost:3000`

### 3. Setup Frontend Client
```bash
cd ../Client
npm install
npm run dev
```
The client will run on `http://localhost:3001`

### 4. Database Setup
- Make sure MongoDB is running on your local machine (`mongodb://localhost:27017`)
- The application will create an `employee` database automatically

## API Endpoints

- `POST /register` - Register a new user
- `POST /login` - Authenticate existing user

## Usage

1. Visit the welcome page at `http://localhost:3001`
2. Navigate to signup to create a new account
3. Use the login page to authenticate with existing credentials
4. Access the home page after successful authentication

## Development

### Frontend Development
```bash
cd Client
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Backend Development
```bash
cd Server
npm start          # Start server with nodemon (auto-restart)
```

## License

This project is open source and available under the [MIT License](LICENSE).
