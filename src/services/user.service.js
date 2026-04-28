const pool = require("../config/db");

async function getAllUsers() {
  try {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  } catch (error) {
    throw error;
  }
}

async function createUser(userData) {
    const { name, email } = userData;

    const query = `
        INSERT INTO users (name, email)
        VALUES ($1, $2)
        RETURNING *;
    `;

    const values = [name, email];

    try {
        const result = await pool.query(query, values);
        return result.rows[0];

    } catch (error) {

        // duplicate email error
        if (error.code === '23505') {
            throw new Error("Email already exists");
        }

        // unknown error
        throw error;
    }
}

module.exports = {
    createUser,
    getAllUsers
};