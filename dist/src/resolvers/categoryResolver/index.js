"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryResolvers = void 0;
const createCategory_1 = require("./createCategory");
const updateCategory_1 = require("./updateCategory");
const deleteCategory_1 = require("./deleteCategory");
const getCategory_1 = require("./getCategory");
const getCategories_1 = require("./getCategories");
exports.categoryResolvers = {
    Query: {
        getCategory: getCategory_1.getCategory,
        getCategories: getCategories_1.getCategories,
    },
    Mutation: {
        createCategory: createCategory_1.createCategory,
        updateCategory: updateCategory_1.updateCategory,
        deleteCategory: deleteCategory_1.deleteCategory,
    },
};
//# sourceMappingURL=index.js.map