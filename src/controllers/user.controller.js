const asyncHandler = require('../utils/asyncHandler');

const pool = require("../config/db");




// define as variable
const dbTest = asyncHandler(async (req, res) => {
 
    const result = await pool.query("SELECT * FROM users");

    res.json({
      success: true,
      data: result.rows,
    });

  
});



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


//day 7/day 8 modified for errors 
const createUser = asyncHandler(async (req, res) => {
 
  const { name, email } = req.body;

  const user = await userService.createUser({name, email});

  return res.status(201).json({
    success: true,
    data: user
  });
});






const getAllUsers = asyncHandler(async (req, res) => {
  
    const users = await userService.getAllUsers();

    return res.status(200).json({
      success: true,
      data: users
    });

  
});

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