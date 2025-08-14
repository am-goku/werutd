import { getCompetitionStandings } from "@/services/apis/apiHandler";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const {id} = await params
        const response = (await getCompetitionStandings(id)).data;
        return NextResponse.json({competition: response}, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Something went wrong",
            error
        }, { status: 500 });
    }
}