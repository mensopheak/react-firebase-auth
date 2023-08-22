# React Firebase Auth Example For Beginner

### Features

1. Register a new user
2. Sign in and persist credential in browser local storage
3. Sign out
4. Forgot password => send password reset email
5. Verify email => send verify email

This project was set up with redux toolkit for state management.

### Installation

```bash
npm install
```

### Packages

1. tailwindcss
2. react-hook-form
3. redux-toolkit
4. react-router-dom
5. react-toastify
6. firebase
7. classnames

### Guide

- Go to firebase console
- Add project
- Enter your project name => Continue
- Disable "Enable Google Analytics for this project" (Not needed for testing) => Create project => Continue
- Add a web app
- Enter your web app => Register app
- Add firebase SDK to your react project
- Create .env file in the root project

```bash
REACT_APP_FIREBASE_API_KEY=apiKey
REACT_APP_FIREBASE_AUTH_DOMAIN=authDomain
REACT_APP_FIREBASE_PROJECT_ID=projectId
REACT_APP_FIREBASE_STORAGE_BUCKET=storageBucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=messagingSenderId
REACT_APP_FIREBASE_APP_ID=appId
```

- Add to project

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
```
