"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromCart = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const removeFromCart = async (_, { cartItemIndex }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const cart = await _models_1.CartModel.findOne({ user: context.userId })
        .populate('items.product')
        .populate('user');
    if (!cart) {
        throw new _config_1.Error('Cart not found', '404');
    }
    cart.items.splice(cartItemIndex, 1);
    //@ts-ignore
    cart.totalPrice = cart.items.reduce((pre, current) => pre.price + current.price).price;
    await cart.save();
    return cart;
};
exports.removeFromCart = removeFromCart;
//# sourceMappingURL=removeFromCart.js.map