import { League, Match } from "@/types/types";

const MOCK_LEAGUES: League[] = [
  { id: "PL", name: "Premier League" },
  { id: "LL", name: "La Liga" },
  { id: "SA", name: "Serie A" },
];

const now = new Date();
const plusMinutes = (m: number) => new Date(now.getTime() + m * 60000).toISOString();
const minusMinutes = (m: number) => new Date(now.getTime() - m * 60000).toISOString();

const MOCK_MATCHES: Match[] = [
  {
    id: "1",
    leagueId: "PL",
    utcKickoff: plusMinutes(90),
    home: { name: "Manchester City", short: "MCI" },
    away: { name: "Arsenal", short: "ARS" },
    status: "SCHEDULED",
    stats: { possessionHome: 54, possessionAway: 46, shotsHome: 0, shotsAway: 0, cardsHome: 0, cardsAway: 0 },
  },
  {
    id: "2",
    leagueId: "PL",
    utcKickoff: minusMinutes(30),
    home: { name: "Liverpool", short: "LIV" },
    away: { name: "Chelsea", short: "CHE" },
    status: "LIVE",
    score: { home: 1, away: 0 },
    stats: { possessionHome: 61, possessionAway: 39, shotsHome: 7, shotsAway: 3, cardsHome: 1, cardsAway: 0 },
  },
  {
    id: "3",
    leagueId: "LL",
    utcKickoff: plusMinutes(30),
    home: { name: "Real Madrid", short: "RMA" },
    away: { name: "Barcelona", short: "BAR" },
    status: "SCHEDULED",
    stats: { possessionHome: 0, possessionAway: 0, shotsHome: 0, shotsAway: 0, cardsHome: 0, cardsAway: 0 },
  },
  {
    id: "4",
    leagueId: "SA",
    utcKickoff: minusMinutes(110),
    home: { name: "Inter", short: "INT" },
    away: { name: "Juventus", short: "JUV" },
    status: "FINISHED",
    score: { home: 2, away: 2 },
    stats: { possessionHome: 52, possessionAway: 48, shotsHome: 12, shotsAway: 10, cardsHome: 2, cardsAway: 1 },
  },
];

export { MOCK_LEAGUES, MOCK_MATCHES };