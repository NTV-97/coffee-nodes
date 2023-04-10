"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategory = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const updateCategory = async (_, { id, input }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const data = (0, _utils_1.removeEmptyObject)(input);
    const response = await _models_1.CategoryModel.findByIdAndUpdate(id, data, { upsert: true }, (err) => {
        if (err)
            throw new _config_1.Error(`${err}`, '409');
    });
    return response;
};
exports.updateCategory = updateCategory;
//# sourceMappingURL=updateCategory.js.map