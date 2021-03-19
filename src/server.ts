import express, { Application, Request, Response, NextFunction } from "express";
import { dirname } from "node:path";
import { REPLCommand } from "node:repl";
import path from "path";

const app: Application = express();
const user = require("./routes/user");

app.use(express.static(path.join(__dirname, "public")));

// const add = (num1: number, num2: number): number => {
//   return num1 + num2;
// };

interface Props {
  name: string;
  email: string;
}
app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/:id", (req: Request, res: Response) => {
  console.log(req.params.id);

  res.send("id");
});
app.use("/user", user);

app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "public", "404.html"));
});

app.listen(5000, () => console.log("Running on 5000"));
