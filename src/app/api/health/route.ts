import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await prisma.$queryRaw`SELECT 1`;
        return NextResponse.json({
            success: true,
            status: 200,
            message: "DB active and connected",
            database: "connected",
        }, {status: 200});
    } catch (error) {
        console.log("Issue checking DB health: ", error)
        
        return NextResponse.json(
            {
                success: true,
                status: 500,
                message: "Internal Server Error",
                database: "disconnected",
            },
            { status: 500 }
        );
    }
}