const express = require("express");
const router = express.Router();

const plantsController = require("../controllers/plantsController");

router.get("/", plantsController.getAll);
router.post("/", plantsController.create);
router.patch("/", plantsController.modify);
router.delete("/", plantsController.delete);

module.exports = router;