import mongoose from "mongoose"

const {Schema} = mongoose

const leaderboardsSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true,
    },
    attendance:{
        type: Number,
        required: true,
    },
    rollno:{
        type: Number,
        unique: true,
        required: true,
    },
    
},
    {timestamps : true}
)

export default mongoose.models.leaderboards || mongoose.model("leaderboards", leaderboardsSchema)  