const pool = require("../config/db");

// define as variable
const dbTest = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");

    res.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Database error",
    });
  }
};

const getHello = (req, res) => {
  res.json({
    message: "Hello from controller... or bhai day 3 pr ho"
  });
};

const getProfile = (req, res) => {
  res.json({
    name: "Sarthak",
    role: "Backend Developer"
  });
};

const getStatus = (req, res) => {
  res.json({
    message: "This one is testing and designed by me..."
  });
};

const getUserById = (req, res) => {
  const userId = req.params.id;

  res.json({
    message: "User fetched",
    userId: userId
  });
};

// export everything
module.exports = {
  dbTest,
  getHello,
  getProfile,
  getStatus,
  getUserById
};