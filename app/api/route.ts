import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import prisma from "@/prisma/client";
const validator = z.object({
    title:z.string().min(1).max(255),
    description:z.string().min(1)
});
export async function POST(request: NextRequest){
    const body = await request.json();
    const isvalid=validator.safeParse(body);
    if(!isvalid){
        return NextResponse.json("Validation error",{status: 400});
    }
    const newinsert =await prisma.issue.create({
        // @ts-ignore
        data:{title: body.title,description:body.description}
    })
    return NextResponse.json(newinsert,{status:200})


}