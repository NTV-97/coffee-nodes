"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderResolvers = void 0;
const cancelOrder_1 = require("./cancelOrder");
const getOrder_1 = require("./getOrder");
const getOrders_1 = require("./getOrders");
const placeOrder_1 = require("./placeOrder");
const updateOrderStatus_1 = require("./updateOrderStatus");
const getAllOrders_1 = require("./getAllOrders");
const deleteAllOrder_1 = require("./deleteAllOrder");
exports.orderResolvers = {
    Query: {
        getOrder: getOrder_1.getOrder,
        getOrders: getOrders_1.getOrders,
        getAllOrders: getAllOrders_1.getAllOrders,
    },
    Mutation: {
        cancelOrder: cancelOrder_1.cancelOrder,
        placeOrder: placeOrder_1.placeOrder,
        updateOrderStatus: updateOrderStatus_1.updateOrderStatus,
        deleteAllOrders: deleteAllOrder_1.deleteAllOrders,
    },
};
//# sourceMappingURL=index.js.map