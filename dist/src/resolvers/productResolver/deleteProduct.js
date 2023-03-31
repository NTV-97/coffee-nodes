"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const deleteProduct = async (_, { id }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const res = await _models_1.ProductModel.findByIdAndDelete(id);
    if (res) {
        return {
            message: `Delete successfully`,
            success: true,
        };
    }
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=deleteProduct.js.map