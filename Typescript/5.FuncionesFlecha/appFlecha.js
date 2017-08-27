"use strict";
var miFuncion = function (a, b) {
    return a + b;
};
var miFunctionF = function (a, b) { return a + b; };
var hulk = {
    nombre: "Hulk",
    smash: function () {
        setTimeout(function () {
            console.log(this.nombre + " smashh!!");
        }, 1500);
    }
};
hulk.smash();
// esto daria una salida undefeined porque el this dentro del function no coge las variables superiores
var hulkFlecha = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smashh!!"); }, 1500);
    }
};
hulkFlecha.smash();
// Con la funcion flecha puedo referirme a loas variables superiores usando el this
