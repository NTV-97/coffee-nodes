"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduct = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const updateProduct = async (_, { id, product }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const data = (0, _utils_1.removeEmptyObject)(product);
    const response = await _models_1.ProductModel.findByIdAndUpdate(id, data, { upsert: true }, (err) => {
        if (err)
            throw new _config_1.Error(`${err}`, '409');
    });
    return response;
};
exports.updateProduct = updateProduct;
//# sourceMappingURL=updateProduct.js.map