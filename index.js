const express = require("express");
const morgan = require("morgan");
const app = express();

const routes = require("./rutas");
const routesApi = require("./routes-api");
//Set

app.set("name", "MyServer");

app.set("views", __dirname, "./views");

app.set("view engine", "ejs");

app.use(morgan("combined"));

app.use(routes);
app.use("./api", routesApi);

app.get("*", (req, res) => {
  res.end("404 - NO ENCONTRADO");
});

app.listen(3000, function () {
  console.log("Servidor Activo");
  console.log("Nombre de la app:", app.get("name"));
});
