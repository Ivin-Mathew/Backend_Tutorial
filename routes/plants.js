const express = require("express");
const router = express.Router();

const plantsController = require("../controllers/plantsController");
const upload = require("../middleware/upload");


router.get("/", plantsController.getAll);
router.post("/", upload.single('image'), plantsController.create);
router.patch("/", plantsController.modify);
router.delete("/", plantsController.delete);

module.exports = router;