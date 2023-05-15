import  Express  from "express";
import connection from "./database/db.js";
// import DefaultData from "./default.js"
import router from "./Routes/Route.js";
import  cors  from "cors";
import dotenv from 'dotenv';
import bodyParser from "body-parser";

const  app =Express();

dotenv.config();




app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/',router);
 const PORT =5000;

 const username = process.env.DB_USERNAME;
 const password = process.env.DB_PASSWORD;
 
 connection(username, password);
  app.listen(PORT,( )=> console.log("server runnig succesfully"));
//   DefaultData();