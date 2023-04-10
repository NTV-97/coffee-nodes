"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getProducts = async (_, __, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const products = await _models_1.ProductModel.find().populate('category');
    return products;
};
exports.getProducts = getProducts;
//# sourceMappingURL=getProducts.js.map