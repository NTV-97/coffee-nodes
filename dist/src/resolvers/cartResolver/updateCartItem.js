"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartItem = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const addToCart_1 = require("./addToCart");
const updateCartItem = async (_, { itemsUpdate }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const cart = await _models_1.CartModel.findOne({ user: context.userId })
        .populate('items.product')
        .populate('user');
    if (cart) {
        for (let index = 0; index < itemsUpdate.length; index++) {
            const { productId, quantity, size, toppings, cartItemIndex } = itemsUpdate[index];
            const product = await _models_1.ProductModel.findById(productId);
            if (!product)
                throw new _config_1.Error('Product not found', '404');
            const _calPrice = (0, addToCart_1.calPrice)({ product, quantity, size, toppings });
            cart.items[cartItemIndex].price = _calPrice.totalPrice;
            cart.items[cartItemIndex].quantity = quantity;
            cart.items[cartItemIndex].size = size;
            cart.items[cartItemIndex].toppings = toppings;
        }
        //@ts-ignore
        cart.totalPrice = cart.items.reduce((pre, current) => pre.price + current.price);
        await cart.save();
    }
    return cart;
};
exports.updateCartItem = updateCartItem;
//# sourceMappingURL=updateCartItem.js.map