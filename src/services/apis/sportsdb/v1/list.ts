// services/apis/sportsdb/v1/list.ts
const API_KEY = process.env.NEXT_PUBLIC_THESPORTSDB_KEY;
const BASE_URL_V1 = `https://www.thesportsdb.com/api/v1/json/${API_KEY}`;

// Generic fetch helper
async function fetchFromAPI(endpoint: string) {
    const res = await fetch(`${BASE_URL_V1}/${endpoint}`);
    if (!res.ok) {
        throw new Error(`API request failed: ${res.status}`);
    }
    return res.json();
}

/* =====================
   GLOBAL LISTS
===================== */
export function listAllSports() {
    return fetchFromAPI(`all_sports.php`);
}

export function listAllCountries() {
    return fetchFromAPI(`all_countries.php`);
}

export function listAllLeagues() {
    return fetchFromAPI(`all_leagues.php`);
}

/* =====================
   LEAGUE LISTS
===================== */
export function listLeaguesByCountryAndSport(country: string, sport: string) {
    return fetchFromAPI(
        `search_all_leagues.php?c=${encodeURIComponent(country)}&s=${encodeURIComponent(sport)}`
    );
}

export function listSeasons(idLeague: string | number, poster?: boolean, badge?: boolean) {
    const params = new URLSearchParams({ id: idLeague.toString() });
    if (poster) params.append("poster", "1");
    if (badge) params.append("badge", "1");

    return fetchFromAPI(`search_all_seasons.php?${params.toString()}`);
}

/* =====================
   TEAM LISTS
===================== */
export function listTeamsByLeagueName(leagueName: string) {
    return fetchFromAPI(`search_all_teams.php?l=${encodeURIComponent(leagueName)}`);
}

export function listTeamsBySportAndCountry(sport: string, country: string) {
    return fetchFromAPI(
        `search_all_teams.php?s=${encodeURIComponent(sport)}&c=${encodeURIComponent(country)}`
    );
}

/* =====================
   PLAYER LISTS
===================== */
export function listPlayersByTeam(idTeam: string | number) {
    return fetchFromAPI(`lookup_all_players.php?id=${idTeam}`);
}
