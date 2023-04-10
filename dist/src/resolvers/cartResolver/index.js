"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartResolvers = void 0;
const addToCart_1 = require("./addToCart");
const clearCart_1 = require("./clearCart");
const getCart_1 = require("./getCart");
const removeFromCart_1 = require("./removeFromCart");
const updateCartItem_1 = require("./updateCartItem");
exports.cartResolvers = {
    Query: {
        getCart: getCart_1.getCart,
    },
    Mutation: {
        addToCart: addToCart_1.addToCart,
        clearCart: clearCart_1.clearCart,
        removeFromCart: removeFromCart_1.removeFromCart,
        updateCartItem: updateCartItem_1.updateCartItem,
    },
};
//# sourceMappingURL=index.js.map