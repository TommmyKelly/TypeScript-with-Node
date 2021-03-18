import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("node1");
});

app.listen(5000, () => console.log("5000node current"));
