# Project Management App

A full-stack project management application built to understand how frontend, backend, and database systems work together in a real-world setup.

## 🚀 Features

* Create and manage projects
* Add, update, and delete tasks
* Track project status (Pending, In Progress, Completed)
* RESTful API integration
* Clean UI with structured frontend

## 🧠 What I Learned

This project focuses on understanding:

* How frontend communicates with backend APIs
* Structuring backend using MVC pattern
* Working with MongoDB and Mongoose
* Handling routes, controllers, and models
* Managing state between UI and server

## 🛠 Tech Stack

**Frontend:**

* HTML
* CSS
* JavaScript

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB (Mongoose)

## 📁 Project Structure

```
client/
  ├── css/
  ├── js/
  ├── index.html

server/
  ├── config/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── server.js
```

## ⚙️ Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/Project-Management-app-Working_understanding.git
```

2. Navigate to server:

```bash
cd server
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

5. Start the server:

```bash
npm run dev
```

6. Open `client/index.html` in your browser

## 📌 Future Improvements

* Add authentication (JWT)
* Improve UI with a framework (React)
* Add user roles & permissions
* Deploy to cloud (Render / Vercel)

## 📄 License

This project is for learning purposes.
