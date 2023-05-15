import mongoose from "mongoose";

export const connection=async (username,password)=>{
    const url = `mongodb://${username}:${password}@ac-xaw46rx-shard-00-00.nrnyweo.mongodb.net:27017,ac-xaw46rx-shard-00-01.nrnyweo.mongodb.net:27017,ac-xaw46rx-shard-00-02.nrnyweo.mongodb.net:27017/?ssl=true&replicaSet=atlas-n3fpss-shard-0&authSource=admin&retryWrites=true&w=majority`

try{
  await mongoose.connect(url, 
    { useUnifiedTopology: true,
     useNewUrlParser: true, 
    });
    
     console.log('connected to mongodb');   
}catch (error){
        console.log("erorr while the databse",error.message)

    }
}

export default connection;
