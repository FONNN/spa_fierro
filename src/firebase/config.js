

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyB6t-EatAuQzgEkSm5wwe2whLAglIazGII",

  authDomain: "spa-fierro.firebaseapp.com",

  projectId: "spa-fierro",

  storageBucket: "spa-fierro.appspot.com",

  messagingSenderId: "479486963355",

  appId: "1:479486963355:web:c30458ad90da7fab8c203e"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const fireConnect = () => app