"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategories = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const getCategories = async (_, __, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const categories = await _models_1.CategoryModel.find();
    return categories;
};
exports.getCategories = getCategories;
//# sourceMappingURL=getCategories.js.map