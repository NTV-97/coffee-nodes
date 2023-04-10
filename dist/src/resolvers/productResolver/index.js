"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productResolvers = void 0;
const createProduct_1 = require("./createProduct");
const updateProduct_1 = require("./updateProduct");
const deleteProduct_1 = require("./deleteProduct");
const getProduct_1 = require("./getProduct");
const getProducts_1 = require("./getProducts");
exports.productResolvers = {
    Query: {
        getProduct: getProduct_1.getProduct,
        getProducts: getProducts_1.getProducts,
    },
    Mutation: {
        createProduct: createProduct_1.createProduct,
        updateProduct: updateProduct_1.updateProduct,
        deleteProduct: deleteProduct_1.deleteProduct,
    },
};
//# sourceMappingURL=index.js.map