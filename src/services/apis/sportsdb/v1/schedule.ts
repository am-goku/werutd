// services/apis/sportsdb/v1/schedule.ts
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
   TEAM SCHEDULE
===================== */
export function getNextEventsByTeam(idTeam: string | number) {
  return fetchFromAPI(`eventsnext.php?id=${idTeam}`);
}

export function getLastEventsByTeam(idTeam: string | number) {
  return fetchFromAPI(`eventslast.php?id=${idTeam}`);
}

/* =====================
   LEAGUE SCHEDULE
===================== */
export function getNextEventsByLeague(idLeague: string | number) {
  return fetchFromAPI(`eventsnextleague.php?id=${idLeague}`);
}

export function getPastEventsByLeague(idLeague: string | number) {
  return fetchFromAPI(`eventspastleague.php?id=${idLeague}`);
}

/* =====================
   EVENTS BY DATE
===================== */
export function getEventsByDate(dateEvent: string, sport?: string, league?: string) {
  const params = new URLSearchParams({ d: dateEvent });
  if (sport) params.append("s", sport);
  if (league) params.append("l", league);

  return fetchFromAPI(`eventsday.php?${params.toString()}`);
}

/* =====================
   SEASON EVENTS
===================== */
export function getEventsBySeason(idLeague: string | number, season: string) {
  return fetchFromAPI(`eventsseason.php?id=${idLeague}&s=${encodeURIComponent(season)}`);
}

/* =====================
   TV SCHEDULE
===================== */
export function getTVScheduleByDate(dateEvent: string, sport?: string, country?: string) {
  const params = new URLSearchParams({ d: dateEvent });
  if (sport) params.append("s", sport);
  if (country) params.append("a", country);

  return fetchFromAPI(`eventstv.php?${params.toString()}`);
}

export function getTVScheduleByChannelName(channelName: string) {
  return fetchFromAPI(`eventstv.php?c=${encodeURIComponent(channelName)}`);
}

export function getTVScheduleByChannelId(idChannel: string | number) {
  return fetchFromAPI(`eventstv.php?id=${idChannel}`);
}
