import { getCompetitions } from "@/services/apis/apiHandler";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = (await getCompetitions()).data;
        return NextResponse.json({competitions: response.competitions}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong",
            error
        }, { status: 500 });
    }
}