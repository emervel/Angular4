"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Puedo importar todas las clases de una carpeta usando un fichero para indexar cada uno
var index_1 = require("./clases/index");
/*Otra forma mas pesada seria importar una a una las clases indicando todos los archivos
import {Xmen, Otra} from "./clases/xmen.class"
import {Villano} from "./clases/villano.class"
*/
var wolverine = new index_1.Xmen("Logan", "wolverine");
var lex = new index_1.Villano("Lex Luthor", "Conquistar el mundo");
wolverine.imprimirPlan();
lex.imprimirPlan();
