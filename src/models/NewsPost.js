import mongoose from "mongoose"

const {Schema} = mongoose

const newspostSchema = new mongoose.Schema({
    headline:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    img:{
        type: String,
        required: true,
    },
    slugId:{
        type: Number,
        required: true,
    },
    author:{
        type:String,
        required: true,
    },
    content:{
        type:String,
        required: true,
    }
},
    {timestamps : true}
)

export default mongoose.models.newsposts || mongoose.model("newsposts", newspostSchema)  