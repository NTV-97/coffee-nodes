"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeOrder = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const placeOrder = async (_, { idCart, note }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const cart = await _models_1.CartModel.findById(idCart)
        .populate({
        path: 'items.product',
        populate: {
            path: 'category',
        },
    })
        .populate('user');
    const order = {
        user: cart?.user,
        items: cart?.items,
        totalPrice: cart?.totalPrice,
        status: 'PROCESSING',
        note,
    };
    const newOrder = new _models_1.OrderModel(order);
    await newOrder.save();
    const _order = await _models_1.OrderModel.findById(newOrder.id)
        .populate({
        path: 'items.product',
        populate: {
            path: 'category',
        },
    })
        .populate('user');
    return _order;
};
exports.placeOrder = placeOrder;
//# sourceMappingURL=placeOrder.js.map