import {doc,setDoc} from "firebase/firestore";

export const guardar = (producto) => {
    const productRef = doc(global.dbCon,"productos",producto.codigo);

    setDoc(productRef,producto);
}