"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const courseMappingSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User", // assuming you have a User model
        required: true,
    },
    courseId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Course", // reference Course model
        required: true,
    }
}, { timestamps: true });
const CourseMapping = mongoose_1.default.model("CourseMapping", courseMappingSchema);
exports.default = CourseMapping;
//# sourceMappingURL=courseMappingModel.js.map