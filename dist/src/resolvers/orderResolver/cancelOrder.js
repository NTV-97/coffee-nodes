"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrder = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const cancelOrder = async (_, { id }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const order = await _models_1.OrderModel.findById(id)
        .populate({
        path: 'items.product',
        populate: {
            path: 'category',
        },
    })
        .populate('user');
    if (order) {
        order.status = 'CANCELLED';
        await order.save();
    }
    return order;
};
exports.cancelOrder = cancelOrder;
//# sourceMappingURL=cancelOrder.js.map