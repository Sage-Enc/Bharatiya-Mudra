import dotenv from "dotenv"
import ConnectDB from "./db/ConnectDB.js";
import {app} from './app.js'

dotenv.config({
    path: './.env'
})

ConnectDB()
.then(()=>{
    try{
        app.listen(process.env.PORT || 8000, 
            ()=>{
                console.log(`Server is running  at port: ${process.env.PORT}`);
            }
        )
    }catch(error){
        console.log("ERROR: ", error);
        throw error;
    }
})
.catch((error)=>{
    console.log("MONGODB Connection Failed!!!", error)
})