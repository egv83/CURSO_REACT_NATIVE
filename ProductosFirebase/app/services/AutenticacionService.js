import { getAuth,signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";

export const ingresar=(email,password)=>{

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Ingreso exitoso",user)
    
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error al Ingreso")
    });


}

export const logOut=()=>{

    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("Cierre ok")
    }).catch((error) => {
        console.log("Error al cerrar",errorCode ,error.errorMessage)
    });

}

export const CreateUser=(email,password)=>{

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log("USUARIO CREADO: ",user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error al Crear suario")
    });
}

export const resetClave=(email)=>{
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
    .then(() => {
        // Password reset email sent!
        // ..
        console.log("REST CLAVE")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("ERROR REST CLAVE", errorCode)
    });
}