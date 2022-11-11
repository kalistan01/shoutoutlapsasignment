const Orders = require('../../model/order/Order')
const Validator = require("fastest-validator");

exports.creatOrder = async (req, res, next) => {
    try {
        let {
            food_id,
            qty
        } = req.body;

        const schema = {
            food_id: {type: "number", optional: false},
            qty: {type: "number", optional: false}
        }
        const v = new Validator();
        const validationResponse = v.validate(req.body, schema);
        if (validationResponse !== true) {
            return res.status(400).json({
                message: "Validation failed",
                error: validationResponse
            });
        } else {
            let orders = new Orders(food_id, qty);
            orders = await orders.create()
            res.status(201).json({message: "credit created", status: 1});
        }
    } catch (error) {
        // next(error);
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    }
};
exports.getAllOrders = async (req, res, next) => {
    try {
        const [order, _] = await Orders.getAll();
        res.status(200).json({order});
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    }
};