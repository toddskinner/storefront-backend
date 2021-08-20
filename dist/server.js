"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const orders_1 = __importDefault(require("./handlers/orders"));
const users_1 = __importDefault(require("./handlers/users"));
const products_1 = __importDefault(require("./handlers/products"));
const dashboard_1 = __importDefault(require("./handlers/dashboard"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const address = '0.0.0.0:3000';
// http://expressjs.com/en/resources/middleware/cors.html
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
orders_1.default(app);
users_1.default(app);
products_1.default(app);
dashboard_1.default(app);
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
