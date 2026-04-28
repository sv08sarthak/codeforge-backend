const pool = require("../config/db");




// define as variable
const dbTest = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");

    res.json({
      success: true,
      data: result.rows,
    });
  } 


  catch (error) {
  console.error(error);

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal server error"
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



//day 5
const userService = require("../services/user.service");

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required"
      });
    }

    // call service
const user = await userService.createUser({ name, email });

    return res.status(201).json({
      success: true,
      data: user
    });

  } 

  catch (error) {
  console.error(error);

  return res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Internal server error"
  });
}
};


const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    return res.status(200).json({
      success: true,
      data: users
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

//------------------

// export everything
module.exports = {
  dbTest,
  getHello,
  getProfile,
  getStatus,
  getUserById,

  createUser,
  getAllUsers // ---day 5
};