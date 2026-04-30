const pool = require("../config/db");




// define as variable
const dbTest = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM users");

    res.json({
      success: true,
      data: result.rows,
    });

  } catch (error) {
    next(error);   // 👈 SAME PATTERN
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


//day 7 modified for errors 
const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const user = await userService.createUser({ name, email });

    return res.status(201).json({
      success: true,
      data: user
    });

  } catch (error) {
    next(error);   //  KEY CHANGE
  }
};






const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();

    return res.status(200).json({
      success: true,
      data: users
    });

  } catch (error) {
   next(error); //very important change
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