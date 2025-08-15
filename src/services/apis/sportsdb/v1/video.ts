// services/apis/sportsdb/v1/video.ts
import axios from "axios";

const API_KEY = process.env.SPORTSDB_API_KEY;
const BASE_URL = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`;

export const getEventHighlights = async (
    dateEvent: string,
    leagueId?: string,
    sportName?: string
) => {
    try {
        const params: Record<string, string> = { d: dateEvent };

        if (leagueId) params.l = leagueId;
        if (sportName) params.s = sportName;

        const { data } = await axios.get(`${BASE_URL}/eventshighlights.php`, {
            params,
        });
        return data;
    } catch (error) {
        console.error("Error fetching event highlights:", error);
        throw error;
    }
};
