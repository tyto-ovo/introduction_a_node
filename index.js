const fs = require("fs");
const { registrar, leer } = require("./operaciones");

const argumento = process.argv.slice(2);
console.log(argumento);

if (argumento[0] === "registrar") {
  registrar(
    argumento[1],
    argumento[2],
    argumento[3],
    argumento[4],
    argumento[5]
  );
} else if (argumento[0] === "leer") {
  leer();
} else {
  console.log("ingrese una funcion definida");
}
