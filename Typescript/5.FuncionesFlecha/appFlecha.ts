let miFuncion = function(a:number,b:number) {
  return a+b;
};

let miFunctionF = (a:number,b:number) => a+b;

let hulk = {
  nombre: "Hulk",
  smash() {
    setTimeout( function() {
      console.log(this.nombre+ " smashh!!");
  }, 1500);
}
}
hulk.smash();
// esto daria una salida undefeined porque el this dentro del function no coge las variables superiores

let hulkFlecha = {
  nombre: "Hulk",
  smash() {
    setTimeout( () => console.log(this.nombre+ " smashh!!"), 1500);
}
}
hulkFlecha.smash();
// Con la funcion flecha puedo referirme a loas variables superiores usando el this
