import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
   
 createdAT:{
    type: Date,
    default: Date.now
  }
})


export default mongoose.model('Estabelecimentos', userSchema)