"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = express_1.default();
const user = require("./routes/user");
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
});
app.get("/:id", (req, res) => {
    console.log(req.params.id);
    res.send("id");
});
app.use("/user", user);
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "public", "404.html"));
});
app.listen(5000, () => console.log("Running on 5000"));
