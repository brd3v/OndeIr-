import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


export default mongoose.model('Estabelecimentos', userSchema)