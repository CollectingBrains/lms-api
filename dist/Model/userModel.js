"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    id: { type: String, required: true, unique: true }, // custom user id
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: {
        type: String,
        enum: ["admin", "teacher", "student"],
        required: true,
    },
    avatar: { type: String, default: null },
}, { timestamps: true });
const UserModel = mongoose_1.default.model("User", UserSchema);
exports.default = UserModel;
//# sourceMappingURL=userModel.js.map