// services/apis/sportsdb/v1/lookup.ts
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
   LEAGUE LOOKUPS
===================== */
export function lookupLeague(idLeague: string | number) {
    return fetchFromAPI(`lookupleague.php?id=${idLeague}`);
}

export function lookupLeagueTable(idLeague: string | number, season?: string) {
    const url = season
        ? `lookuptable.php?l=${idLeague}&s=${season}`
        : `lookuptable.php?l=${idLeague}`;
    return fetchFromAPI(url);
}

/* =====================
   TEAM LOOKUPS
===================== */
export function lookupTeam(idTeam: string | number) {
    return fetchFromAPI(`lookupteam.php?id=${idTeam}`);
}

export function lookupTeamEquipment(idTeam: string | number) {
    return fetchFromAPI(`lookupequipment.php?id=${idTeam}`);
}

/* =====================
   PLAYER LOOKUPS
===================== */
export function lookupPlayer(idPlayer: string | number) {
    return fetchFromAPI(`lookupplayer.php?id=${idPlayer}`);
}

export function lookupPlayerHonours(idPlayer: string | number) {
    return fetchFromAPI(`lookuphonours.php?id=${idPlayer}`);
}

export function lookupPlayerFormerTeams(idPlayer: string | number) {
    return fetchFromAPI(`lookupformerteams.php?id=${idPlayer}`);
}

export function lookupPlayerMilestones(idPlayer: string | number) {
    return fetchFromAPI(`lookupmilestones.php?id=${idPlayer}`);
}

export function lookupPlayerContracts(idPlayer: string | number) {
    return fetchFromAPI(`lookupcontracts.php?id=${idPlayer}`);
}

export function lookupPlayerResults(idPlayer: string | number) {
    return fetchFromAPI(`playerresults.php?id=${idPlayer}`);
}

/* =====================
   EVENT LOOKUPS
===================== */
export function lookupEvent(idEvent: string | number) {
    return fetchFromAPI(`lookupevent.php?id=${idEvent}`);
}

export function lookupEventResults(idEvent: string | number) {
    return fetchFromAPI(`eventresults.php?id=${idEvent}`);
}

export function lookupEventLineup(idEvent: string | number) {
    return fetchFromAPI(`lookuplineup.php?id=${idEvent}`);
}

export function lookupEventTimeline(idEvent: string | number) {
    return fetchFromAPI(`lookuptimeline.php?id=${idEvent}`);
}

export function lookupEventStatistics(idEvent: string | number) {
    return fetchFromAPI(`lookupeventstats.php?id=${idEvent}`);
}

export function lookupEventTVBroadcasts(idEvent: string | number) {
    return fetchFromAPI(`lookuptv.php?id=${idEvent}`);
}

/* =====================
   VENUE LOOKUP
===================== */
export function lookupVenue(idVenue: string | number) {
    return fetchFromAPI(`lookupvenue.php?id=${idVenue}`);
}
