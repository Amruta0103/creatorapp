# Creator Directory App

A React Native mini-app built with **Expo** that allows users to **search and filter creators** and view detailed profiles.  
The backend is powered by **Node.js + Express + MongoDB** and deployed on Render.

---

## ✨ Features

### Search Screen
- List of creators (fetched from MongoDB backend)
- **Search bar** to filter creators by name
- **Category filter bar** at the top
- Tap on a creator to open their profile

### Profile Screen
- Displays:
  - Profile image
  - Name and category
  - Followers (formatted, e.g., 120K)
  - Short bio
  - Social links (Instagram, YouTube) – opens in browser

### Extra
- Handles loading, empty, and error states
- Clean, responsive UI built with React Native components
- Data is dynamically fetched (no hardcoded JSON)

---

## 🛠 Tech Stack

- **Frontend:** React Native (Expo)
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas
- **Navigation:** React Navigation
- **Styling:** React Native Stylesheets with a theme system

---

## 📂 Folder Structure

```bash
creatorapp/
├── backend/        # Node.js + Express API
│   ├── index.js
│   ├── models/
│   └── ...
├── frontend/       # React Native (Expo)
│   ├── screens/
│   ├── components/
│   ├── styles/
│   ├── theme.js
│   └── ...
└── README.md
```

## 🚀 Setup Instructions
1. Clone the Repository
```bash
git clone repository-url
cd creatorapp
```
2. Backend Setup
```bash
cd backend
```

Create a .env file inside the backend/ folder

Install dependencies and start the backend:
```bash
npm install
npm start
```
This will start the backend on http://localhost:5000/creators (or your Render URL).

3. Frontend Setup
```bash
cd ../frontend
npm install
npx expo start
```
Options after running:
- Scan the QR code using Expo Go app on your phone
- Press a to run on Android emulator
- Press w to run in browser

## 🌐 Deployed Links
- Backend API (Render): [https://creatorapp.onrender.com/creators]
- GitHub Repository: [https://github.com/Amruta0103/creatorapp/]
- Android APK: [https://expo.dev/accounts/amruta_d/projects/creatorapp/builds/31edf426-b81a-4009-9668-8770cb9a8818]

## 🎨 Theme / Color Palette
Theme colors are defined in theme.js

## 📦 Submission Deliverables
- GitHub repository link
- Backend deployed URL (Render)
- Android APK (.apk) or AAB build link (Expo EAS Build)
- Screenshots or a short demo video

## 👩‍💻 Author
Amruta D.
