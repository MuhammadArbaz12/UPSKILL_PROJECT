import mongoose from "mongoose";
let initialized = false;

export const Connect = async()=>{
    mongoose.set("strictQuery",false)
    if(initialized){
       console.log("Already connected to MongoDB")
    }
    try{
        await mongoose.Connect(process.env.MONGODB_URL,{
            dbName:"UPSKILL_PROJECT",
            useNewUrlParser:true,
            useUnifiedTopology:true,
      
        })
        console.log("Connected to MongoDB")
        initialized = true
    }catch(err){
        console.log("Database Connecting Error",err)    
        }
}