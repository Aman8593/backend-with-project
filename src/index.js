import mongoose from 'mongoose'
import  { DB_NAME } from './constants';

import express from 'express';
const app = express();

 ;(async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`);
        app.on("ERROR:",() => {
            console.error("Error occurred");
        });

        app.listen(process.env.port, () => {
            console.log(`Server is running on port ${process.env.port}`);
        })
        
    } catch (error) {
        console.error("ERROR:",error);
        throw err

        
    }
 })()