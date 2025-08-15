// lib/thesportsdb.js
const API_KEY = process.env.NEXT_PUBLIC_THESPORTSDB_KEY; // Keep key in .env
const BASE_URL_V1 = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`;

/**
 * Helper function to fetch from TheSportsDB API
 */
async function fetchFromAPI(endpoint: string) {
    const res = await fetch(`${BASE_URL_V1}/${endpoint}`);
    if (!res.ok) {
        throw new Error(`API request failed: ${res.status}`);
    }
    return res.json();
}

// ==========================
// SEARCH ENDPOINTS (V1)
// ==========================

// Search for a team by name
export function searchTeams(teamName: string) {
    return fetchFromAPI(`searchteams.php?t=${encodeURIComponent(teamName)}`);
}

// Search for an event by title (optional season/date/filename)
export function searchEvents({ event, season, date, filename }: {
    event?: string;
    season?: string;
    date?: string;
    filename?: string;
}) {
    const params = new URLSearchParams();
    if (event) params.append("e", event);
    if (season) params.append("s", season);
    if (date) params.append("d", date);
    if (filename) params.append("f", filename);

    return fetchFromAPI(`searchevents.php?${params.toString()}`);
}

// Search for a player by name
export function searchPlayers(playerName: string) {
    return fetchFromAPI(`searchplayers.php?p=${encodeURIComponent(playerName)}`);
}

// Search for a venue by name
export function searchVenues(venueName: string) {
    return fetchFromAPI(`searchvenues.php?v=${encodeURIComponent(venueName)}`);
}
