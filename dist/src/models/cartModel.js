"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = void 0;
const mongoose_1 = require("mongoose");
const cartItemSchema = new mongoose_1.Schema({
    product: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
    toppings: [{ type: String }],
    price: { type: Number, required: true },
}, { _id: false });
const cartSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [cartItemSchema],
    totalPrice: { type: Number, required: true },
}, { timestamps: true });
exports.CartModel = (0, mongoose_1.model)('Cart', cartSchema);
//# sourceMappingURL=cartModel.js.map