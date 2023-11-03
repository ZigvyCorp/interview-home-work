import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "success" });
});

app.listen(5000, () => {
  console.log("Server starts at http://localhost:5000");
});
