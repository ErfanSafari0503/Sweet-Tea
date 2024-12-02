const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["Erfan", "Ali"] });
});

app.listen(8384, () => {
  console.log("Server started on port 8384");
});
