import {NextResponse} from "next/server"
import connect from "../../../utils/db"
import blogpost from "../../../models/BlogPost"

export const GET = async (request)=>{
    //fetch
    try{     
        await connect()
        const posts = await blogpost.find();
        return new NextResponse(JSON.stringify(posts), {status:200})

    }catch(err){
        return new NextResponse("Database Error", {status:500})
    }
}