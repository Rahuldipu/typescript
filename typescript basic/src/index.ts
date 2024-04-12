import express, { Request, Response } from "express";
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Well done!");
});

app.post("/Id/:id/Name/:name", (req: Request, res: Response) => {
    res.send({
        data: req.body,
        params: {
            id: req.params.id,
            name: req.params.name,
        },
    });
});

app.get("/details/:id", (req: Request, res: Response) => {
    var pool = mysql.createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        connectionLimit: 10,
        multipleStatements: true,
    });

    pool.getConnection(function (err: any, conn: any) {
        if (err) {
            console.log("Entered into error");
            res.send({
                success: false,
                statusCode: 500,
                message: "Getting error during the connection",
            });

            return;
        }

        conn.query(
            "SELECT * FROM actor WHERE actor_id=?",
            [req.params.id],
            function (err: any, rows: any) {
                if (err) {
                    conn.release();
                    return res.send({
                        success: false,
                        statusCode: 400,
                    });
                }

                res.send({ message: "Success", statusCode: 200, data: rows });

                conn.release();
            }
        );
    });

    // res.send({
    //     message: "Well done!!",
    //     id: req.params.id,
    //     name: req.params.name,
    // });
});

app.listen(process.env.PORT, () => {
    console.log(`The application is listening on port ${process.env.PORT}`);
});
