"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const course_controller_1 = require("../controllers/course.controller");
// router.get('/getCourse',authenticate,getCourse);
router.get('/getCourse', course_controller_1.getCourse);
// router.post("/createCourse", authenticate, authorize(["admin"]),createCourse, (req, res) => {
//   res.json({ message: "Course created (Admin only)" });
// });
router.post("/createCourse", course_controller_1.createCourse);
// // router.get('/addCourse',addCourses);
// router.get('/getCourseById/:_id',authenticate,getCourseById)
router.get('/getCourseById/:_id', course_controller_1.getCourseById);
exports.default = router;
//# sourceMappingURL=coursesRoutes.js.map