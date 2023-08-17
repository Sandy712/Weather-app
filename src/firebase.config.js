import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDki9W4q2-j_bXL0dGMHa4dH7LcO8Guwvo",
  authDomain: "mausam-weather.firebaseapp.com",
  projectId: "mausam-weather",
  storageBucket: "mausam-weather.appspot.com",
  messagingSenderId: "964716831380",
  appId: "1:964716831380:web:92f9df3081bf1437b10a81",
  measurementId: "G-DKCRHMPPE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);