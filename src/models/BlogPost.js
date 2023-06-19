import mongoose from "mongoose"

const {Schema} = mongoose

const blogpostSchema = new mongoose.Schema({
    title:{
        type: String,
        unique: true,
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

export default mongoose.models.blogposts || mongoose.model("blogposts", blogpostSchema)  