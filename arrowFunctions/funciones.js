
// sumar = function(a,b){
//     let resultado = v1+v2;
//     alert("El resultado es: "+resultado);
// }

ejecutarSumar = () => {

    let caja1 = document.getElementById("txtValor1");
    let caja2 = document.getElementById("txtValor2");

    let v1 = parseInt(caja1.value);
    let v2 = parseInt(caja2.value);

    sumar(v1, v2);
};

/* SINTAXIS ARROW FUNCTION*/
sumar = (a, b) => {
    let resultado = a + b;
    alert("El resultado es: " + resultado);
};

ejecutarRestar = () => {
    let caja1 = document.getElementById("txtValor1");
    let caja2 = document.getElementById("txtValor2");

    let v1 = parseInt(caja1.value);
    let v2 = parseInt(caja2.value);
    restar(v1, v2);
};

restar = (a, b) => {
    let resultado = a - b;
    alert("El resultado es: " + resultado);
};

buscarMenor = (x, y) => {
    if (x < y) {
        alert("El menor es: "+x);
    }else{
        alert("El menor es: "+y);
    }
}

/* FUNCIONES COMO PARAMETROS*/
ejecutar = (fnOperacion) => {
    let caja1 = document.getElementById("txtValor1");
    let caja2 = document.getElementById("txtValor2");

    let v1 = parseInt(caja1.value);
    let v2 = parseInt(caja2.value);

    fnOperacion(v1, v2);

}