"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const updateProduct = async (_, { id, product }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    if (context.role !== _models_1.UserRoleEnum.ADMIN)
        throw new _config_1.Error("use don't have permission", '400');
    const _product = await _models_1.ProductModel.findById(id).populate('category');
    Object.keys(product).forEach((key) => {
        //@ts-ignore
        if (product[key]) {
            //@ts-ignore
            _product[key] = product[key];
        }
    });
    _product?.save();
    const newProduct = await _models_1.ProductModel.findById(id).populate('category');
    return newProduct;
};
exports.updateProduct = updateProduct;
//# sourceMappingURL=updateProduct.js.map