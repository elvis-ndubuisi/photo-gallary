import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv4JXAOS6ucYb9rRr0X-0VeXZJR2WUXJc",
  authDomain: "photogallary-react.firebaseapp.com",
  projectId: "photogallary-react",
  storageBucket: "photogallary-react.appspot.com",
  messagingSenderId: "955955013012",
  appId: "1:955955013012:web:243a07e8a4ba2e4f481b81",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const storage = getStorage(app);

export { database, storage };
