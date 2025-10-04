"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_controller_1 = require("../controllers/user.controller");
router.get('/getUser', user_controller_1.getUser);
router.post("/register", user_controller_1.register);
router.post('/login', user_controller_1.login);
router.get("/:_id", user_controller_1.getUserById);
// 🔑 use process.env.JWT_SECRET in real app
// 🔹 Register new user
exports.default = router;
//# sourceMappingURL=userRoutes.js.map