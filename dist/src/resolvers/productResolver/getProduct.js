"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getProduct = async (_, { id }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const product = await _models_1.ProductModel.findById(id).populate('category');
    if (!product)
        throw new _config_1.Error('Product not found', '404');
    return product;
};
exports.getProduct = getProduct;
//# sourceMappingURL=getProduct.js.map