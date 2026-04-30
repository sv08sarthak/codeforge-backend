
const express = require("express");

const app = express();


const errorHandler = require("./src/middlewares/errorHandler");

// middleware
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// import routes
const userRoutes = require("./src/routes/userRoutes");

// use routes
app.use("/api/users", userRoutes);

app.use(errorHandler); //day 7 


const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

