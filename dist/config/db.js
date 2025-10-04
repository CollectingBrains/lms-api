"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/lms";
const connectDb = async () => {
    mongoose_1.default.connect(MONGO_URI)
        .then(() => console.log('db connected'));
};
exports.connectDb = connectDb;
//# sourceMappingURL=db.js.map