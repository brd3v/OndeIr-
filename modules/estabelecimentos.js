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
    horarioAbertura: {
        type:  Number,
        required: true,
    },
    horarioFecha:{
        type: Number,
        required: true
    },
    descricao:{
        type: String,
    required: true
    },
    endereco:{
        type: String,
        required: true
    },
    instagram:{
        type: String,
        required: true
    },
    fotoFachada:{
        type: String,
        required: true
    }
  //  createdAT:{
    //    type: Date,
      //  default: Date.now()
   // }
})


export default mongoose.model('Estabelecimento', userSchema)