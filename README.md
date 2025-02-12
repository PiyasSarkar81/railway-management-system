# Railway Management System

This is a Railway Management System built using React (frontend), Node.js, and Express (backend). It allows users to search for trains, book seats, and manage train details.

## **Features**
- User authentication (login/register).
- Admin panel for adding and managing trains.
- Search for available trains between two stations.
- Book seats on available trains.
- Real-time seat availability updates.

---

## **Table of Contents**
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running the Application](#running-the-application)
4. [API Documentation](#api-documentation)

---

## **Prerequisites**

Before running this project, ensure you have the following installed:
- **Node.js**: Download from [here](https://nodejs.org/).
- **MySQL**: Install MySQL and create a database named `railway_db`.
- **Git**: Download from [here](https://git-scm.com/).

---

## **Installation**

### **Step 1: Clone the Repository**
Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/railway-management-system.git
cd railway-management-system
```

### **Step 2: Install Dependencies**
Install dependencies for both the frontend and backend.

#### Backend:
Navigate to the `backend` folder and install dependencies:
```bash
cd backend
npm install
```

#### Frontend:
Navigate to the `frontend` folder and install dependencies:
```bash
cd ../frontend
npm install
```

---

## **Running the Application**

### **Step 1: Set Up Environment Variables**
Create `.env` files in both the `backend` and `frontend` folders.

#### Backend `.env` File
Create a `.env` file in the `backend` folder with the following content:
```env
DB_NAME=railway_db
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_HOST=localhost
DB_PORT=3306
API_KEY=your_admin_api_key
JWT_SECRET=your_jwt_secret
PORT=5000
```

#### Frontend `.env` File
Create a `.env` file in the `frontend` folder with the following content:
```env
VITE_BACKEND_URL=http://localhost:5000/api
VITE_ADMIN_API_KEY=your_admin_api_key
```

### **Step 2: Start the Backend Server**
Navigate to the `backend` folder and start the server:
```bash
npm start
```

### **Step 3: Start the Frontend Server**
Navigate to the `frontend` folder and start the development server:
```bash
npm run dev
```

### **Step 4: Access the Application**
- Open your browser and navigate to `http://localhost:5173` (frontend).
- The backend API will be available at `http://localhost:5000/api`.

---

## **API Documentation**

The backend exposes the following APIs:

### **1. Authentication**
- **POST `/api/auth/login`**: Logs in a user.
- **POST `/api/auth/register`**: Registers a new user.

### **2. Trains**
- **GET `/api/trains?source=<source>&destination=<destination>`**: Fetches available trains between two stations.
- **POST `/api/trains`**: Adds a new train (admin-only).

### **3. Bookings**
- **POST `/api/bookings`**: Books seats on a train.

For more details, refer to the source code or use tools like Postman to test the APIs.



