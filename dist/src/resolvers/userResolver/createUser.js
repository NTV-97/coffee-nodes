"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const _models_1 = require("@models");
const _services_1 = require("@services");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const createUser = async (_, { password, type, email, phoneNumber }, context) => {
    if (!context.userId)
        throw new _config_1.Error('unauthorized', '401');
    const checkUser = await _models_1.UserModel.findOne({ email });
    if (checkUser?.email === email) {
        throw new _config_1.Error('email already used', '409');
    }
    (0, _utils_1.checkTypeUser)(type);
    const hashedPwd = await _services_1.Auth.hashPassword(password);
    const adminId = context.userId;
    const user = new _models_1.UserModel({ email, password: hashedPwd, type, adminId, phoneNumber });
    await user.save();
    return {
        message: `${email} successfully created`,
        success: true,
    };
};
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map