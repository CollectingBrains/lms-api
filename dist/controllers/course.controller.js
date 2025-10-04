"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseById = exports.createCourse = exports.getCourse = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const coursesModel_1 = __importDefault(require("../Model/coursesModel"));
const getCourse = async (req, res) => {
    try {
        const course = await coursesModel_1.default.find({});
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
        console.log(err);
    }
};
exports.getCourse = getCourse;
// Create (POST) a new course
const createCourse = async (req, res) => {
    try {
        const { courseId, courseTitle, url, description, modules } = req.body;
        if (!courseTitle) {
            return res.status(400).json({ error: "courseTitle is required" });
        }
        // Create course directly (Mongoose handles nested schemas)
        const course = new coursesModel_1.default({
            courseId,
            courseTitle,
            url,
            description,
            modules
        });
        await course.save();
        res.status(201).json({
            message: "Course created successfully",
            course
        });
    }
    catch (err) {
        console.error("Error creating course:", err);
        res.status(500).json({ error: err });
    }
};
exports.createCourse = createCourse;
;
const getCourseById = async (req, res) => {
    try {
        const { _id } = req.params; // grab `id` from URL
        const course = await coursesModel_1.default.findById(_id);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json(course);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getCourseById = getCourseById;
//# sourceMappingURL=course.controller.js.map