const express = require('express');
const router = express.Router();
const itemsController = require("../controllers/itemsController");

router.get("/",itemsController.getAll);

router.post("/",itemsController.create);

router.patch("/:id", itemsController.update);

router.delete("/:id", itemsController.remove);

module.exports = router;