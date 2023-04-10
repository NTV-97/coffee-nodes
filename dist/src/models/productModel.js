"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    details: {
        size: {
            type: [
                {
                    name: String,
                    price: Number,
                },
            ],
            required: true,
        },
        topping: {
            type: [
                {
                    name: String,
                    price: Number,
                },
            ],
            required: true,
        },
    },
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
//# sourceMappingURL=productModel.js.map