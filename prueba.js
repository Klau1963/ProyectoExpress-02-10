const express = require("express"); // de lo que instalamos, nos devuelve la funcion expres
const app = express(); //ejecutamos el servidor, importante que sea constante
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  // la aplicacion escucha peticiones GET (funcion) necesita parametros (req, res)= peticion /respjuesta
  res.send("Hello World!"); // respuesta le pedimos que envie Hello World
});

app.get("/nombre", (req, res) => {
  res.send("Hola Klau!");
});
app.get("/usuario/:nombre", (req, res) => {
  const nombre = req.params.nombre; //req =peticion
  res.send(`Hola, ${nombre}`);
});

app.post("/usuarios", function (req, res) {
  //   const nombre = req.body.nombre;
  //   const apellido = req.body.apellido;
  const { nombre, apellido } = req.body;
  res.send(`Hola,soy  ${nombre} ${apellido}`);
});

app.listen(port, () => {
  // listen va a escuchar todas las peticiones
  console.log(`Example app listening on port ${port}`);
});
