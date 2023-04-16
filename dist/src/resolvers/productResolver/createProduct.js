"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const createProduct = async (_, { product }, context) => {
    try {
        if (!context.userId)
            throw new _config_1.Error('unauthorized', '401');
        if (context.role !== _models_1.UserRoleEnum.ADMIN)
            throw new _config_1.Error("use don't have permission", '400');
        const newProduct = new _models_1.ProductModel(product);
        await newProduct.save();
        const _product = await _models_1.ProductModel.findById(newProduct.id).populate('category');
        return _product;
    }
    catch (error) {
        return error;
    }
};
exports.createProduct = createProduct;
//# sourceMappingURL=createProduct.js.map