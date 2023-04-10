"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCart = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getCart = async (_, __, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    let cart = await _models_1.CartModel.findOne({ user: context.userId })
        .populate({
        path: 'items.product',
        populate: {
            path: 'category',
        },
    })
        .populate('user');
    if (!cart) {
        cart = await _models_1.CartModel.create({ user: context.userId });
    }
    return cart;
};
exports.getCart = getCart;
//# sourceMappingURL=getCart.js.map