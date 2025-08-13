import { League, Match } from "@/types/types";
import { MOCK_LEAGUES, MOCK_MATCHES } from "./datas";

async function fetchLeaguesMock(): Promise<League[]> {
  await new Promise((r) => setTimeout(r, 350));
  return MOCK_LEAGUES;
}

async function fetchMatchesMock(leagueId: string): Promise<Match[]> {
  await new Promise((r) => setTimeout(r, 500));
  return MOCK_MATCHES.filter((m) => m.leagueId === leagueId).sort((a, b) => a.utcKickoff.localeCompare(b.utcKickoff));
}

export { fetchLeaguesMock, fetchMatchesMock };

// Real API Integration (optional):
// Replace fetchLeaguesMock/fetchMatchesMock with the below if you have keys & a Next.js API route proxy.
// Example (Football-Data.org):
// 1) Create /app/api/leagues/route.ts and /app/api/matches/[leagueId]/route.ts that forward requests with your API key from process.env.
// 2) Then implement these fetchers:
// const fetcher = (url: string) => fetch(url).then((res) => { if (!res.ok) throw new Error("Network error"); return res.json(); });
// function fetchLeagues() { return fetcher("/api/leagues"); }
// function fetchMatches(leagueId: string) { return fetcher(`/api/matches/${leagueId}`); }