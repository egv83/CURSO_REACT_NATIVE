import {doc,setDoc,collection,getDocs} from "firebase/firestore";

export const guardar = (producto) => {
    const productRef = doc(global.dbCon,"productos",producto.codigo);

    setDoc(productRef,producto);
}

export const consultar = async (fnSetProductos) => {
    const productosRef = collection(global.dbCon, "productos");
    const productosSnap = await getDocs(productosRef);
    let productosArray=[];
    productosSnap.forEach((documento)=>{
        console.log("DOC: ",documento.data());
        productosArray.push(documento.data());
    });
    fnSetProductos(productosArray);
}
