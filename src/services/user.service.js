const pool = require("../config/db");


async function createUser(userData){

    const {name, email} = userData;

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
    createUser
};
