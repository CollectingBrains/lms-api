"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCourseById = exports.createMapping = void 0;
const courseMappingModel_1 = __importDefault(require("../Model/courseMappingModel"));
// POST -> Save mapping
const createMapping = async (req, res) => {
    try {
        const { userId, courseId } = req.body;
        const mapping = new courseMappingModel_1.default({ userId, courseId });
        await mapping.save();
        res.status(201).json(mapping);
    }
    catch (err) {
        res.status(400).json({ error: err });
    }
};
exports.createMapping = createMapping;
// GET -> Get single course details by courseId
const getCourseById = async (req, res) => {
    try {
        const { courseId } = req.params;
        // Find mapping & populate the course
        const mapping = await courseMappingModel_1.default.findOne({ courseId }).populate("courseId");
        if (!mapping) {
            return res.status(404).json({ message: "Course not found for this ID" });
        }
        res.json(mapping.courseId); // return the course details
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};
exports.getCourseById = getCourseById;
//# sourceMappingURL=courseMappingcontroller.js.map