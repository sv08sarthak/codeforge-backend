const express = require('express');
const app = express();

//middleware 
app.use(express.json());

//test routes
app.get("/", (req, res) => {
  res.send("API is running... OR BHAI KYA HAAL HAI ??")
});


// import routes
const userRoutes = require("./src/routes/userRoutes");

// use userRoute
app.use("/api/users", userRoutes);

const PORT = 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



