// require('dotenv').config({path: './env'}) 
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env',
})

connectDB();

//  ;(async ()=> {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`);
//         app.on("ERROR:",() => {
//             console.error("Error occurred");
//         });

//         app.listen(process.env.port, () => {
//             console.log(`Server is running on port ${process.env.port}`);
//         })
        
//     } catch (error) {
//         console.error("ERROR:",error);
//         throw err

        
//     }
//  })()