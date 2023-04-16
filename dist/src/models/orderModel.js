"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.OrderStatus = void 0;
const mongoose_1 = require("mongoose");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "PENDING";
    OrderStatus["PROCESSING"] = "PROCESSING";
    OrderStatus["COMPLETED"] = "COMPLETED";
    OrderStatus["CANCELLED"] = "CANCELLED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
const orderItemSchema = new mongoose_1.Schema({
    product: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
    toppings: [{ type: String }],
    price: { type: Number, required: true },
}, { _id: false });
const orderSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    totalPrice: { type: Number, required: true },
    status: { type: String },
    note: { type: String },
}, { timestamps: true });
exports.OrderModel = (0, mongoose_1.model)('Order', orderSchema);
//# sourceMappingURL=orderModel.js.map