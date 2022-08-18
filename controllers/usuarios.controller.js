const { response } = require("express");

const usuarios_get = (req = request, res = response) => {
  const { q, name, apikey } = req.query;

  res.json({
    msg: "get API - controller",
    q,
    name,
    apikey,
  });
};

const usuarios_post = (req, res = response) => {
  // para leer el body del post lo hacemos con
  // req.body or request.body....
  const { nombre, edad, pais, grade } = req.body;

  res.json({
    msg: "post API - controller",
    nombre,
    edad,
    pais,
    grade,
  });
};

const usuarios_put = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API - controller",
    id,
  });
};

const usuarios_patch = (req, res = response) => {
  res.json({
    msg: "patch API - controller",
  });
};

const usuarios_delete = (req, res = response) => {
  res.json({
    msg: "delete API - controller",
  });
};

module.exports = {
  usuarios_get,
  usuarios_post,
  usuarios_put,
  usuarios_patch,
  usuarios_delete,
};
