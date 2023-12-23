import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMcW8gMI1EGgK98dEZcvL7o7op71WhUDA",
  authDomain: "chat-bd272.firebaseapp.com",
  projectId: "chat-bd272",
  storageBucket: "chat-bd272.appspot.com",
  messagingSenderId: "271331565798",
  appId: "1:271331565798:web:9153e2ec3a8981c609db27"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()