import { getCompetitionMatches } from "@/services/apis/apiHandler";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params; // no await here

    // Query params
    const { searchParams } = new URL(req.url);
    const dateFrom = searchParams.get("dateFrom") || undefined;
    const dateTo = searchParams.get("dateTo") || undefined;
    const matchday = searchParams.get("matchday") || undefined;
    const season = searchParams.get("season") || undefined;

    const response = (await getCompetitionMatches(id, { dateFrom, dateTo, matchday, season })).data;

    return NextResponse.json({ competition: response }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}