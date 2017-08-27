"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Xmen = (function () {
    function Xmen(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    Xmen.prototype.imprimirPlan = function () {
        console.log("El plan es " + this.plan);
    };
    return Xmen;
}());
exports.Xmen = Xmen;
var Otra = (function () {
    function Otra() {
    }
    return Otra;
}());
exports.Otra = Otra;
