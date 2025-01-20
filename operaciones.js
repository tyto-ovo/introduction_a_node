const fs = require("fs");

const registrar = (name, age, type, colour, problem) => {
  const nuevaCita = {
    Nombre: name,
    edad: age,
    tipo: type,
    color: colour,
    enfermedad: problem,
  };
  const dataJSON = JSON.parse(fs.readFileSync("citas.json", "utf-8"));

  dataJSON.push(nuevaCita);
  fs.writeFileSync("citas.json", JSON.stringify(dataJSON));
};

const leer = () => {
  const lectura = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  console.log(lectura);
};

module.exports = { registrar, leer };
