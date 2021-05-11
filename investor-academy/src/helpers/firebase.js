//Componente donde se configura la conexion con Firebase

// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from 'firebase/app';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp ({
    apiKey: "AIzaSyD8o5yObD_u0Jr6OqhyXZsffyxVYzhUEIo",
    authDomain: "investoracademy-fb32b.firebaseapp.com",
    databaseURL: "https://investoracademy-fb32b-default-rtdb.firebaseio.com",
    projectId: "investoracademy-fb32b",
    storageBucket: "investoracademy-fb32b.appspot.com",
    messagingSenderId: "929903943817",
    appId: "1:929903943817:web:9ac2c93b967b2ae0a42658",
    measurementId: "G-MKF5M4K73R"
});


export default firebaseConfig