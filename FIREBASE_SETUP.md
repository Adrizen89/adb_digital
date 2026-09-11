# Firebase Setup Guide

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `adb-digital` (or your choice)
4. Disable Google Analytics (or enable if you want)
5. Click "Create project"

## 2. Register Your Web App

1. In your Firebase project, click the Web icon (</>) to add a web app
2. Register app with nickname: `ADB Digital Website`
3. Don't check "Firebase Hosting" for now
4. Click "Register app"
5. Copy the Firebase configuration object

## 3. Configure Your Project

1. Create a `.env` file in the project root (copy from `.env.example`)
2. Replace the placeholder values with your Firebase config:

```env
VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef123456
```

3. Update `src/firebase/config.js` to use environment variables:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## 4. Set Up Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode" (we'll set up rules next)
4. Choose a location (e.g., `europe-west1`)
5. Click "Enable"

## 5. Configure Firestore Security Rules

1. In Firestore, go to "Rules" tab
2. Replace with these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write to leads collection (contact form)
    match /leads/{leadId} {
      allow create: if true;
      allow read, update, delete: if false; // Only you can read via Firebase Console
    }

    // Deny all other collections by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Click "Publish"

## 6. Test the Integration

1. Restart your dev server: `npm run dev`
2. Fill out the contact form
3. Check Firebase Console > Firestore Database
4. You should see a new document in the `leads` collection

## 7. (Optional) Set Up Email Notifications

You can set up Firebase Cloud Functions to send you an email when a new lead is created:

1. In Firebase Console, upgrade to "Blaze" plan (pay-as-you-go, free tier included)
2. Set up Cloud Functions with the trigger:
   - Event: `onCreate`
   - Collection: `leads`
   - Action: Send email via SendGrid/Mailgun/etc.

## Security Notes

- Never commit your `.env` file to Git (it's in `.gitignore`)
- The `.env.example` file shows the structure but has no real credentials
- Firestore rules only allow creating leads, not reading them publicly
- Only you can view leads in the Firebase Console
