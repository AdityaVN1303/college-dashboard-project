import {NextResponse} from "next/server"
import connect from "../../../utils/db"
import leaderboard from "../../../models/LeaderBoards"

export const GET = async (request)=>{
    //fetch
    try{     
        await connect()
        const users = await leaderboard.find();
        return new NextResponse(JSON.stringify(users), {status:200})

    }catch(err){
        return new NextResponse("Database Error", {status:500})
    }
}