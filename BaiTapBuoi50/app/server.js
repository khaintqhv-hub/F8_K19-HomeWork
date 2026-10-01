const express = require("express");
const cors = require("cors");

const db = require("./db");


const app = express();


app.use(cors());
app.use(express.json());


// kiểm tra server
app.get("/", (req,res)=>{
    res.send("TopCV API running");
});


// kiểm tra kết nối database
app.get("/candidates/top-cv", async(req,res)=>{

    try{

        const result = await db.query(`
            SELECT 
                c.id,
                c.name,
                COUNT(cv.id) AS total_cv
            FROM candidate c
            JOIN cv
            ON cv.candidate_id = c.id
            GROUP BY c.id, c.name
            ORDER BY total_cv DESC;
        `);

        res.json(result.rows);

    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});

app.get("/categories/top-job", async(req,res)=>{

    try{

        const result = await db.query(`
            SELECT
                c.id,
                c.name,
                COUNT(j.id) AS total_job
            FROM category c
            JOIN job j
            ON j.category_id = c.id
            GROUP BY c.id,c.name
            ORDER BY total_job DESC
            LIMIT 1;
        `);


        res.json(result.rows);


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});

app.get("/jobs/application-count", async(req,res)=>{

    try{

        const result = await db.query(`
            SELECT
                c.name AS category_name,
                j.title AS job_name,
                COUNT(ja.id) AS total_apply

            FROM category c

            JOIN job j
            ON j.category_id = c.id

            LEFT JOIN job_application ja
            ON ja.job_id = j.id

            GROUP BY 
                c.name,
                j.id,
                j.title

            ORDER BY total_apply DESC;
        `);


        res.json(result.rows);


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});


app.listen(3000,()=>{
    console.log("Server running port 3000");
});