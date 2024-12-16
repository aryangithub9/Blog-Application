import mongoose from 'mongoose'

 export default async function Connectdb() {
    try {
        await mongoose.connect(process.env.MONODBURL);
        console.log("Database Connected Sucessfully")
    } catch (error) {
        console.log(error);    
    }
}