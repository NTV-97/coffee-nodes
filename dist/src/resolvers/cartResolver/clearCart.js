"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearCart = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const clearCart = async (_, __, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const cart = await _models_1.CartModel.findOne({ user: context.userId })
        .populate({
        path: 'items.product',
        populate: {
            path: 'category',
        },
    })
        .populate('user');
    if (!cart) {
        throw new _config_1.Error('Cart not found', '404');
    }
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();
    return cart;
};
exports.clearCart = clearCart;
//# sourceMappingURL=clearCart.js.map