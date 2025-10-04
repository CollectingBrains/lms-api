"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const coursesRoutes_1 = __importDefault(require("./Routes/coursesRoutes"));
const userRoutes_1 = __importDefault(require("./Routes/userRoutes"));
const json_Routes_1 = __importDefault(require("./Routes/json.Routes"));
const courseMappingRoutes_1 = __importDefault(require("./Routes/courseMappingRoutes"));
const app = (0, express_1.default)();
const db_1 = require("./config/db");
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_1.connectDb)();
app.use('', coursesRoutes_1.default);
app.use('', userRoutes_1.default);
app.use('', json_Routes_1.default);
app.use('', courseMappingRoutes_1.default);
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map