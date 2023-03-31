"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategory = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getCategory = async (_, { id }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const category = await _models_1.CategoryModel.findById(id);
    return category;
};
exports.getCategory = getCategory;
//# sourceMappingURL=getCategory.js.map