const { Router } = require("express");

const {
  usuarios_get,
  usuarios_put,
  usuarios_post,
  usuarios_delete,
  usuarios_patch,
} = require("../controllers/usuarios.controller");

const router = Router();

router.get("/", usuarios_get);

router.put("/:id", usuarios_put);

router.post("/", usuarios_post);

router.delete("/", usuarios_delete);

router.patch("/", usuarios_patch);

module.exports = router;
