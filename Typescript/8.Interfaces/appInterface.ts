interface Xmen {
  nombre: string,
  poder: string
}

//Tengo que definir en la funcion el parametro que espero del objeto para saber que no es undefined
function enviarMision (xmen : {nombre:string}) {
  console.log("Enviando a: "+xmen.nombre);
};

/*Pero si uso una interface y digo que el objeto la cumple basta con ponerla tb en la function
asi me aseguro que cuando llame a la funcion me de en tiempo de escritura que no cumplo la interface*/
function enviarAlCuartel(xmen : Xmen) {
  console.log("Mandar al cuartel a: "+xmen.nombre);
};

let wolvarine : Xmen = {
  nombre: "wolverine",
  poder: "regeneracion"
};

enviarMision(wolvarine);
enviarAlCuartel(wolvarine);
