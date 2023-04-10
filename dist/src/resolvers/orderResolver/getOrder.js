"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getOrder = async (_, { id }, context) => {
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
    return order;
};
exports.getOrder = getOrder;
//# sourceMappingURL=getOrder.js.map