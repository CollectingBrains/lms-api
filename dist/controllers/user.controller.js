"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.login = exports.register = exports.getUser = void 0;
const express_1 = __importDefault(require("express"));
const userModel_1 = __importDefault(require("../Model/userModel"));
const router = express_1.default.Router();
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = 'mySuperSecretKey123';
const getUser = async (req, res) => {
    try {
        const user = await userModel_1.default.find({});
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(400).json({ mesage: err });
    }
};
exports.getUser = getUser;
const register = async (req, res) => {
    try {
        const { id, name, email, password, role, avatar } = req.body;
        const existingUser = await userModel_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const newUser = new userModel_1.default({
            id,
            name,
            email,
            password: hashedPassword,
            role,
            avatar,
        });
        await newUser.save();
        return res.status(201).json({ message: "User registered successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
exports.register = register;
// 🔹 Login user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel_1.default.findOne({ email });
        if (!user)
            return res.status(400).json({ message: "Invalid email or password" });
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid email or password" });
        if (!secretKey) {
            return res.status(500).json({ message: "JWT_SECRET not defined" });
        }
        else {
            const token = jsonwebtoken_1.default.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: "1h" });
            res.json({
                message: "Login successful",
                token,
                user: { id: user._id, name: user.name, role: user.role },
            });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.login = login;
const getUserById = async (req, res) => {
    try {
        const { _id } = req.params; // grab `id` from URL
        const user = await userModel_1.default.findById(_id);
        if (!user) {
            return res.status(404).json({ message: "Course not found" });
        }
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getUserById = getUserById;
//# sourceMappingURL=user.controller.js.map