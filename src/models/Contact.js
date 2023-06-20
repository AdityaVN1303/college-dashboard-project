import mongoose from "mongoose"

const {Schema} = mongoose

const contactSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
},
    {timestamps : true}
)

export default mongoose.models.contact || mongoose.model("contact", contactSchema)  