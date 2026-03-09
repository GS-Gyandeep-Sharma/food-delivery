
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
    await mongoose.connect(connectionStr);
    let restaurant = new restaurantSchema(payload);
    const result = await restaurant.save();
    return NextResponse.json({result,success:true})
}