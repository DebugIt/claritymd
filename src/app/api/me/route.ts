import { prisma } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const { userId } = await auth()
        if(!userId){
            return NextResponse.json({
                success: false,
                message: "Unauthorized",
                status: 401,
                data: null
            }, {status: 401})
        }

        const clerkUser = await currentUser()
        if(!clerkUser){
            return NextResponse.json({
                success: false,
                message: "User not found",
                status: 404,
                data: null
            }, {status: 404})
        }
        const email = clerkUser.emailAddresses.find((emailAddr) => emailAddr.id === clerkUser.primaryEmailAddressId)?.emailAddress
        if(!email){
            return NextResponse.json({
                success: false,
                message: "No primary email found",
                status: 400,
                data: null
            }, {status: 400})
        }

        const user = await prisma.user.upsert({
            where: {
                clerkUserId: userId
            },
            update: {
                email
            },
            create: {
                clerkUserId: userId,
                email
            }
        })

        return NextResponse.json({
            success: true,
            message: "User created",
            status: 201,
            data: {
                user: {
                    email: user.email,
                    createdAt: user.createdAt
                }
            }
        })

    } catch (error) {
        console.log("Error in fetching info at /me: ", error)
        return NextResponse.json({
            success: false,
            message: "Internal Server Error",
            status: 500,
            data: null
        }, {status: 500})
    }
}