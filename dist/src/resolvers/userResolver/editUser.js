"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUser = void 0;
const _models_1 = require("@models");
const _services_1 = require("@services");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const editUser = async (_, { id, email, password, type, phoneNumber }, context) => {
    await (0, _utils_1.permissionUser)(context.userId, id);
    const checkUser = await _models_1.UserModel.findOne({ email });
    if (checkUser?.email === email) {
        throw new _config_1.Error('Username already used', '409');
    }
    if (type)
        (0, _utils_1.checkTypeUser)(type);
    const data = {
        email,
        password: password ? await _services_1.Auth.hashPassword(password) : undefined,
        type,
        phoneNumber,
    };
    const remove = (0, _utils_1.removeEmptyObject)(data);
    const response = await _models_1.UserModel.findByIdAndUpdate(id, remove, { upsert: true }, (err, doc) => {
        if (err)
            throw new _config_1.Error(`${err}`, '500');
    });
    return response;
};
exports.editUser = editUser;
//# sourceMappingURL=editUser.js.map