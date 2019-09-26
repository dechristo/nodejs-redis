"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const router_1 = require("./router");
const app = express_1.default();
const port = 5005;
app.use(morgan_1.default("combined"));
app.use(router_1.router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=server.js.map