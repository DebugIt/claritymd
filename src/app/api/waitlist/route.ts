import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import z from "zod";

const waitListSchema = z.object({
    name: z.string().trim().min(2, "Name must be atelast 2characters").max(100, "Max char limit hit"),
    email: z.string().trim().email("Please enter a valid email")
})

export async function POST(request: Request){
    try {
        const body = await request.json()

        const res = waitListSchema.safeParse(body)
        if(!res.success){
            return NextResponse.json({
                success: false,
                message: "Invalid Input",
                status: 400,
                data: null
            })
        }

        const { name, email } = res.data
        const existingEntry = await prisma.waitList.findFirst({
            where: {
                email
            }
        })
        if(existingEntry){
            return NextResponse.json({
                success: false,
                message: "This email is already on waiting list",
                status: 409,
                data: null
            })
        }
        const entry = await prisma.waitList.create({
            data: {
                id: crypto.randomUUID(),
                name,
                email
            }
        })
        return NextResponse.json({
            success: true,
            message: "You are now on waiting list...see you soon",
            status: 201,
            data: {
                id: entry.id
            }
        })

    } catch (error) {
        console.log("Error in joining waiting list: ", error)
        return NextResponse.json({
            success: false,
            message: "Internal Server Error",
            status: 500,
            data: null
        })
    }
}