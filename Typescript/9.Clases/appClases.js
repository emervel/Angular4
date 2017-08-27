"use strict";
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre"; //podemos darle directamente un valor por defecto
        this.puedePelear = true;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        console.log("Se ejecuto el constructor");
    }
    return Avenger;
}());
var antMan = new Avenger("AntMan", "cap", "Scott Lang");
console.log(antMan);
