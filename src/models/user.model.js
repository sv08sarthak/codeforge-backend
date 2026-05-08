const pool = require("../config/db");

async function getAllUsersModel() {

    const result = await pool.query("SELECT * FROM users");

    return result.rows;
}

async function createUserModel(name, email) {

    const query = `
        INSERT INTO users (name, email)
        VALUES ($1, $2)
        RETURNING *;
    `;

    const values = [name, email];

    const result = await pool.query(query, values);

    return result.rows[0];
}

module.exports = {
    getAllUsersModel,
    createUserModel
};