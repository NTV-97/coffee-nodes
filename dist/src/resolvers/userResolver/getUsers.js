"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const _models_1 = require("@models");
const getUsers = async (_, data, context) => {
    // if (!context.userId) throw new Error('unauthorized', '401');
    return _models_1.UserModel.find();
};
exports.getUsers = getUsers;
//# sourceMappingURL=getUsers.js.map