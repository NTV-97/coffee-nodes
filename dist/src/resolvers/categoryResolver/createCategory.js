"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategory = void 0;
const _models_1 = require("@models");
const _config_1 = require("@config");
const createCategory = async (_, { category }, context) => {
    try {
        if (!context.userId)
            throw new _config_1.Error('unauthorized', '401');
        if (context.role !== _models_1.UserRoleEnum.ADMIN)
            throw new _config_1.Error("use don't have permission", '400');
        const newCategory = new _models_1.CategoryModel(category);
        return await newCategory.save();
    }
    catch (error) {
        return error;
    }
};
exports.createCategory = createCategory;
//# sourceMappingURL=createCategory.js.map