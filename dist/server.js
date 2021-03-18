"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const user = require("./routes/user");
const add = (num1, num2) => {
    return num1 + num2;
};
app.get("/", (req, res) => {
    console.log(add(1, 3));
    res.send("hello");
});
app.use("/user", user);
app.listen(5000, () => console.log("Running on 5000"));
