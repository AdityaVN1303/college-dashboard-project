import {NextResponse} from 'next/server'
import connect from "../../../utils/db"
import Contact from '../../../models/Contact'


export async function POST(request){
    const {fullname, email, message} = await request.json()
    
    try {
        await connect()
        await Contact.create({fullname, email, message})
        return NextResponse.json({msg : ["Created Successfully"]})
    } catch (error) {
        return NextResponse.json({msg : ["Unable to Send Message"]})
    }
}