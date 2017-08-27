//Puedo importar todas las clases de una carpeta usando un fichero para indexar cada uno
import{Xmen, Villano} from "./clases/index";

/*Otra forma mas pesada seria importar una a una las clases indicando todos los archivos
import {Xmen, Otra} from "./clases/xmen.class"
import {Villano} from "./clases/villano.class"
*/
let wolverine = new Xmen("Logan","wolverine");
let lex = new Villano("Lex Luthor", "Conquistar el mundo")
wolverine.imprimirPlan();
lex.imprimirPlan();
