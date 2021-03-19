import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();
const user = require("./routes/user");

const add = (num1: number, num2: number): number => {
  return num1 + num2;
};

interface Props {
  name: string;
  email: string;
}

app.get("/:id", (req: Request, res: Response) => {
  console.log(req.params.id);

  res.send("hello");
});

app.use("/user", user);

app.listen(5000, () => console.log("Running on 5000"));
