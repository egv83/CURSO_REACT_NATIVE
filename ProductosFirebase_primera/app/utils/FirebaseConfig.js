import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


export const cargarConfiguracion = () => {
    // console.log("ENTRO EN CARGAR CONFIGURACION");
    const app = initializeApp(firebaseConfig);
    global.dbCon = getFirestore(app); /*CON GLOBAL SE CONVIERTE UN UNA VARIABLE GLOBAL*/
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOaMpeVZFWxsSMgJSZPPc0cJLTi568kAY",
    authDomain: "fir-rn-8d3c0.firebaseapp.com",
    projectId: "fir-rn-8d3c0",
    storageBucket: "fir-rn-8d3c0.firebasestorage.app",
    messagingSenderId: "214392547927",
    appId: "1:214392547927:web:312d497e759d6f45e61112"
};