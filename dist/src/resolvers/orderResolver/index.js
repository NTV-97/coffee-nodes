"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderResolvers = void 0;
const cancelOrder_1 = require("./cancelOrder");
const getOrder_1 = require("./getOrder");
const getOrders_1 = require("./getOrders");
const placeOrder_1 = require("./placeOrder");
const updateOrderStatus_1 = require("./updateOrderStatus");
exports.orderResolvers = {
    Query: {
        getOrder: getOrder_1.getOrder,
        getOrders: getOrders_1.getOrders,
    },
    Mutation: {
        cancelOrder: cancelOrder_1.cancelOrder,
        placeOrder: placeOrder_1.placeOrder,
        updateOrderStatus: updateOrderStatus_1.updateOrderStatus,
    },
};
//# sourceMappingURL=index.js.map