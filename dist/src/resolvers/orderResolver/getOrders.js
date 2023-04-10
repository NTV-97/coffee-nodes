"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrders = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getOrders = async (_, __, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const order = await _models_1.OrderModel.find({ user: context.userId })
        .populate({
        path: 'items.product',
        populate: {
            path: 'category',
        },
    })
        .populate('user');
    return order;
};
exports.getOrders = getOrders;
//# sourceMappingURL=getOrders.js.map