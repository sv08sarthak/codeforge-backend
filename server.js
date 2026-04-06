const express = require("express");

const app = express();

app.use(express.json());

const userRoutes = require("./src/routes/userRoutes");

app.use("/api", userRoutes);

app.get("/", (req, res) => {
  res.send("CodeForge Backend Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
