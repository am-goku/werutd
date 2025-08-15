// services/apis/sportsdb/v2/list.ts

import axios from "axios";

const BASE_URL_V2 = "https://www.thesportsdb.com/api/v2/json";

const buildUrl = (endpoint: string) => `${BASE_URL_V2}${endpoint}`;

// ===== LEAGUE =====
export const listLeagueTeams = async (idLeague: string | number) => {
  const { data } = await axios.get(buildUrl(`/list/teams/${idLeague}`));
  return data;
};

export const listLeagueSeasons = async (idLeague: string | number) => {
  const { data } = await axios.get(buildUrl(`/list/seasons/${idLeague}`));
  return data;
};

export const listLeagueSeasonPosters = async (idLeague: string | number) => {
  const { data } = await axios.get(buildUrl(`/list/seasonposters/${idLeague}`));
  return data;
};

// ===== TEAM =====
export const listTeamPlayers = async (idTeam: string | number) => {
  const { data } = await axios.get(buildUrl(`/list/players/${idTeam}`));
  return data;
};
