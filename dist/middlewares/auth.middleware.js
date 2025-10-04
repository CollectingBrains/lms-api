"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// const JWT_SECRET = process.env.JWT_SECRET as string ||'defaultsec';
// Custom request type with user info
const secretKey = 'mySuperSecretKey123';
// ✅ Authentication Middleware
const authenticate = (req, res, next) => {
    // 1. Check if secret exists
    // if (!secretKey) {
    //   console.error("❌ JWT_SECRET is missing in .env file!");
    //   return res.status(500).json({ message: "Internal server error: JWT secret not configured" });
    // }
    // 2. Get token from header
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    // 3. Verify token
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
exports.authenticate = authenticate;
// ✅ Authorization Middleware
const authorize = (roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    };
};
exports.authorize = authorize;
//# sourceMappingURL=auth.middleware.js.map