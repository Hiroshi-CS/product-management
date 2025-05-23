const express = require("express");
const router = express.Router();

const controller = require("../../controller/client/cart.controller");

router.get("/", controller.index);
router.post("/add/:productId", controller.addPost);
router.get("/update/:productId/:quantity", controller.update);
router.get("/delete/:productId", controller.delete);

module.exports = router;
