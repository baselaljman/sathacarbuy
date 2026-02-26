import admin from 'firebase-admin';

if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  console.warn("FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set. IP blocking feature will be disabled.");
}

if (!admin.apps.length && process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  try {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error: any) {
    console.error("Firebase Admin SDK initialization error:", error.message);
  }
}

const firestoreAdmin = admin.apps.length ? admin.firestore() : null;

export { admin, firestoreAdmin };
