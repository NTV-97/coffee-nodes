"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUser = void 0;
const _models_1 = require("@models");
const _services_1 = require("@services");
const _config_1 = require("@config");
const _utils_1 = require("@utils");
const editUser = async (_, { id, email, password, phoneNumber, name, address }) => {
    const userExists = await _models_1.UserModel.findOne({
        $or: [{ email }, { phoneNumber }],
    });
    if (userExists) {
        if (email === userExists.email) {
            throw new _config_1.Error('Email already exists for another user', '409');
        }
        if (phoneNumber === userExists.phoneNumber) {
            throw new _config_1.Error('Phone number already exists for another user', '409');
        }
    }
    const data = {
        email,
        password: password ? await _services_1.Auth.hashPassword(password) : undefined,
        phoneNumber,
        name,
        address,
    };
    const remove = (0, _utils_1.removeEmptyObject)(data);
    const response = await _models_1.UserModel.findByIdAndUpdate(id, remove, { upsert: true }, (err) => {
        if (err)
            throw new _config_1.Error(`${err}`, '409');
    });
    return response;
};
exports.editUser = editUser;
//# sourceMappingURL=editUser.js.map