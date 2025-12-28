import dotenv from 'dotenv';
import connectDatabse from './db/db.js';
import express from 'express';

dotenv.config({
    path: './.env'
})

const app = express();
connectDatabse()
.then(
app.listen(process.env.PORT || 8000, ()=> {
    console.log(`Server is runnning on port http://localhost:${process.env.PORT}`)
}))