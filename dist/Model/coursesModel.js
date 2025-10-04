"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const quizSchema = new mongoose_1.default.Schema({
    question: { type: String, required: true },
    options: { type: [String], required: true },
    correctAnswer: { type: String, required: true },
    suggestion: { type: String }
});
const lessonSchema = new mongoose_1.default.Schema({
    lessonId: { type: String, required: true },
    title: { type: String, required: true },
    explanation: { type: String },
    exampleCode: { type: String },
    quiz: [quizSchema]
});
const moduleSchema = new mongoose_1.default.Schema({
    moduleId: { type: Number, required: true },
    title: { type: String, required: true },
    duration: { type: String },
    lessons: [lessonSchema]
});
const courseSchema = new mongoose_1.default.Schema({
    courseId: { type: String, required: true },
    courseTitle: { type: String, required: true },
    url: { type: String }, // image or thumbnail
    description: { type: String },
    modules: [moduleSchema]
});
exports.default = mongoose_1.default.model("Course", courseSchema);
//# sourceMappingURL=coursesModel.js.map