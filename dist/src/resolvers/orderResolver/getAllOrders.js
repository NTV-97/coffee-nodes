"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrders = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getAllOrders = async (_, __, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const order = await _models_1.OrderModel.find()
        .populate({
        path: 'items.product',
        populate: {
            path: 'category',
        },
    })
        .populate('user');
    return order;
};
exports.getAllOrders = getAllOrders;
//# sourceMappingURL=getAllOrders.js.map