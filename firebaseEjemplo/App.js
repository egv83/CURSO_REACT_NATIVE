import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, Button} from 'react-native';
// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore, doc, setDoc, addDoc, collection, getDoc} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOaMpeVZFWxsSMgJSZPPc0cJLTi568kAY",
    authDomain: "fir-rn-8d3c0.firebaseapp.com",
    projectId: "fir-rn-8d3c0",
    storageBucket: "fir-rn-8d3c0.firebasestorage.app",
    messagingSenderId: "214392547927",
    appId: "1:214392547927:web:281ad3338e7159c5e61112"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function App() {

    const guardar = () => {

        let miPersona = {
            cedula: "1003195675",
            nombre: "Remigio",
            apellido: "Camelos",
        }

        const refPersona = doc(db, "Personas", "1003195675");
        setDoc(refPersona, miPersona);
        console.log("Guardado con setDoc", refPersona);
    }

    const guardarConAdd = () => {

        let miPersona = {
            cedula: "1003158894",
            nombre: "Ivonne",
            apellido: "Vallejo",
        }

        try {
            const refPersonas = collection(db, "Personas")        // .add({nombre:"Juan",apellido:"Perez"});
            const docRef = addDoc(refPersonas, miPersona);

            console.log("Guardado con add", refPersonas.id);
        } catch (error) {
            console.log("Error al guardar", error);
        }
    }

    const recuperarDomuento = async () => {
        const refPersona = doc(db, "Personas", "1003195664");
        const personaSnap = await getDoc(refPersona);

        if (personaSnap.exists()) {
            console.log("Persona encontrada", personaSnap.data());
        } else {
            console.log("No existe la persona");
        }

    }


    return (
        <View style={styles.container}>
            <Text>FIREBASE ya con firestore!</Text>
            <Button title="Guardar"
                    onPress={() => guardar()}
            />

            <Text>-------------------------</Text>
            <Button title="Add"
                    onPress={() => guardarConAdd()}
            />
            <Text>-------------------------</Text>
            <Button title="Recuperar Documento"
                    onPress={() => recuperarDomuento()}
            />
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
