const express = require("express");
const router = express.Router();
const cameraController = require("../controllers/CameraController");
router.get("/", cameraController.index);
router.post("/", cameraController.store);
module.exports = router;
