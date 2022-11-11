const express = require("express");
const orderController = require("../controller/orderController/orderController")
const router = express.Router();
router.route("/order/").post(orderController.creatOrder).get(orderController.getAllOrders);
module.exports = router;