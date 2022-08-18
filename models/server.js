const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // Middlewares
    this.middlewares();

    // Rutas de mi app..
    this.routes();
  }

  middlewares() {
    this.app.use(cors());

    // lectura y parseo del body
    this.app.use(express.json());

    // Directorio Publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/usuarios", require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, (req, res) => {
      console.log("Servidor listening on port " + this.port);
    });
  }
}

module.exports = Server;
