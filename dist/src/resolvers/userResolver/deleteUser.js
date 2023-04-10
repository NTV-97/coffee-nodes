"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const _models_1 = require("@models");
const deleteUser = async (_, { id }) => {
    const res = await _models_1.UserModel.findByIdAndDelete(id);
    if (res) {
        return {
            message: `Delete successfully`,
            success: true,
        };
    }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=deleteUser.js.map