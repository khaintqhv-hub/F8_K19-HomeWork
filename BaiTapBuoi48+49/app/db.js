const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    port: 4000,
    user: "postgres",
    password: "postgres",
    database: "default"
});

pool.connect()
    .then(() => {
        console.log("Connected PostgreSQL");
    })
    .catch((err) => {
        console.log("Database error:", err);
    });


module.exports = pool;