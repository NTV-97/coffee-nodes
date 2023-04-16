"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserRoleEnum = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
var UserRoleEnum;
(function (UserRoleEnum) {
    UserRoleEnum["ADMIN"] = "ADMIN";
    UserRoleEnum["USER"] = "USER";
})(UserRoleEnum = exports.UserRoleEnum || (exports.UserRoleEnum = {}));
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: { type: String },
    name: { type: String },
    role: {
        type: String,
        require: true,
    },
}, { timestamps: true });
exports.UserModel = mongoose_1.default.model('User', userSchema);
//# sourceMappingURL=userModel.js.map