class Avenger {
  nombre: string = "Sin nombre";//podemos darle directamente un valor por defecto
  equipo: string;// Si no tendra undefined
  nombreReal: string;
  puedePelear: boolean = true;
  peleasGanadas: number = 0;

  constructor (nombre:string, equipo:string, nombreReal:string) {
    this.nombre=nombre;
    this.equipo=equipo;
    this.nombreReal=nombreReal;
    console.log("Se ejecuto el constructor");
  }
}

let antMan = new Avenger("AntMan","cap","Scott Lang");

console.log(antMan);
