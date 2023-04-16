"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAllOrders = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const deleteAllOrders = async (_, __, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const order = await _models_1.OrderModel.deleteMany()
        .populate({
        path: 'items.product',
        populate: {
            path: 'category',
        },
    })
        .populate('user');
    if (order.ok) {
        return {
            message: `Delete successfully`,
            success: true,
        };
    }
    return order;
};
exports.deleteAllOrders = deleteAllOrders;
//# sourceMappingURL=deleteAllOrder.js.map