"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const _models_1 = require("@models");
const _services_1 = require("@services");
const signup = async (_, { email, password, phoneNumber }) => {
    const hashedPwd = await _services_1.Auth.hashPassword(password);
    const user = new _models_1.UserModel({ email, password: hashedPwd, type: 'admin', phoneNumber });
    try {
        await user.save();
        return {
            message: `${email} successfully created`,
            success: true,
        };
    }
    catch (error) {
        return error;
    }
};
exports.signup = signup;
//# sourceMappingURL=signup.js.map