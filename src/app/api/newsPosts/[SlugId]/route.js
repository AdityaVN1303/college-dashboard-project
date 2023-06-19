import {NextResponse} from "next/server"
import connect from "../../../../utils/db"
import newspost from "../../../../models/NewsPost"

export const GET = async (request, {params})=>{
    //fetch

    const {SlugId} = params;

    try{     
        await connect()
        
        const post = await newspost.findOne({ "slugId" : SlugId });
        return new NextResponse(JSON.stringify(post), {status:200})

    }catch(err){
        return new NextResponse("Database Error", {status:500})
    }
}