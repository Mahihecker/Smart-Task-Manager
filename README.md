# 📝 Smart Task Manager
A full-stack task management web application that allows users to create, categorize, filter,edit,delete and manage their tasks with deadline reminders, user authentication, and an intuitive dashboard.

![React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
     ![MongoDB](https://img.shields.io/badge/Database-MongoDB-4EA94B?logo=mongodb&logoColor=white&style=for-the-badge)
     ![Express](https://img.shields.io/badge/Backend-Express.js-000000?logo=express&logoColor=white&style=for-the-badge)
     ![Firebase](https://img.shields.io/badge/Auth-Firebase-FFCA28?logo=firebase&logoColor=white&style=for-the-badge)

## 🛠 Tech Stack
- **Frontend**: React,React Router, Axios
- **Authentication**: Firebase Authentication
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)

## 🚀 How to Run the Project
### 1. Clone the Repository
```bash
git clone https://github.com/Mahihecker/Smart-Task-Manager.git
cd Smart-Task-Manager
```
### 2. Install Dependencies
#### Backend
```bash
cd backend
npm install
```
#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the `backend` folder with the following content:
```env
PORT=5000
MONGODB_URI=<your_mongodb_uri>
```
> 🔐 **Firebase Auth Setup**: Configure Firebase Authentication and add your Firebase configuration in the frontend (usually in `firebase.js`).

### 4. Start the App
#### Backend
```bash
cd backend
npm start
```
#### Frontend
```bash
cd ../frontend
npm start
```
Now visit: [http://localhost:3000](http://localhost:3000)

## ✅ Assumptions Made
- User signs up or logs in using Firebase Authentication.
- MongoDB is accessible via a valid URI (local or cloud).
- Each user only sees and manages their own tasks.
- Notifications show tasks with deadlines within the next 2 days.
- App is designed primarily for desktop use (basic mobile support).
- Task deadlines are interpreted in local time.

## 💡 Potential Improvements (If Given More Time)
- Add push/email notifications for upcoming tasks.
- Improve mobile responsiveness and add dark mode.
- Enable recurring tasks and calendar integration (e.g., Google Calendar).
- Add drag-and-drop task reordering or a Kanban-style board.
- Implement offline-first support and make the app a PWA.
- Introduce admin roles for managing teams and assigning tasks.
- Include AI-based weekly progress summaries and task suggestions.
- Add filters for tags, priority levels, or advanced analytics.

## 👩‍💻 Author
Made with 💻 by [@Mahihecker](https://github.com/Mahihecker)
