
import { connectionStr } from "@/app/lib/db";
import { restaurantSchema } from "@/app/lib/restaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    const data = await restaurantSchema.find()
    console.log("data"+data);
    return NextResponse.json({result:true});
}

export async function POST(request){
    let payload = await request.json();
    let result;
    await mongoose.connect(connectionStr);
    if(payload.login){
        result = await restaurantSchema.findOne({email:payload.email})
    }
    else{
        let restaurant = new restaurantSchema(payload);
        const result = await restaurant.save();
    }
    const success = !!result;
    return NextResponse.json({result,success})    
}