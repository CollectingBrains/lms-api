"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const router = (0, express_1.Router)();
// ✅ Seed data directly without schema
router.post("/seed", async (req, res) => {
    try {
        const seedData = req.body; // Expecting an array of objects
        if (!Array.isArray(seedData)) {
            return res.status(400).json({ message: "Request body must be an array" });
        }
        // Get the "courses" collection directly
        const collection = mongoose_1.default.connection.collection("seed");
        // Clear old data
        await collection.deleteMany({});
        // Insert new data
        const result = await collection.insertMany(seedData);
        res.status(201).json({ message: " seeded", data: result });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// ✅ Get all courses
router.get("/getSeed", async (req, res) => {
    try {
        const collection = mongoose_1.default.connection.collection("seed");
        const seed = await collection.find({}).toArray();
        res.json(seed);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.default = router;
//# sourceMappingURL=json.Routes.js.map