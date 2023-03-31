"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const _models_1 = require("@models");
const _services_1 = require("@services");
const _config_1 = require("@config");
const signup = async (_, { registerInput }) => {
    const { email, password, phoneNumber, name, address } = registerInput;
    try {
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
        const hashedPwd = await _services_1.Auth.hashPassword(password);
        const user = new _models_1.UserModel({ email, password: hashedPwd, phoneNumber, name, address });
        await user.save();
        return {
            message: 'success',
            token: _services_1.Auth.generateJwt({
                userId: user.id,
                email: user.email,
            }),
        };
    }
    catch (error) {
        return error;
    }
};
exports.signup = signup;
//# sourceMappingURL=signup.js.map