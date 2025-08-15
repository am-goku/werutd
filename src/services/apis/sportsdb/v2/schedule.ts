// services/apis/sportsdb/v2/schedule.ts

import axios from "axios";

const BASE_URL_V2 = "https://www.thesportsdb.com/api/v2/json";

const buildUrl = (endpoint: string) => `${BASE_URL_V2}${endpoint}`;

// ===== LEAGUE SCHEDULE =====
export const getNextEventsInLeague = async (idLeague: string) => {
  const { data } = await axios.get(buildUrl(`/schedule/next/league/${idLeague}`));
  return data;
};

export const getPreviousEventsInLeague = async (idLeague: string) => {
  const { data } = await axios.get(buildUrl(`/schedule/previous/league/${idLeague}`));
  return data;
};

// ===== TEAM SCHEDULE =====
export const getNextEventsInTeam = async (idTeam: string) => {
  const { data } = await axios.get(buildUrl(`/schedule/next/team/${idTeam}`));
  return data;
};

export const getPreviousEventsInTeam = async (idTeam: string) => {
  const { data } = await axios.get(buildUrl(`/schedule/previous/team/${idTeam}`));
  return data;
};

// ===== VENUE SCHEDULE =====
export const getNextEventsInVenue = async (idVenue: string) => {
  const { data } = await axios.get(buildUrl(`/schedule/next/venue/${idVenue}`));
  return data;
};

export const getPreviousEventsInVenue = async (idVenue: string) => {
  const { data } = await axios.get(buildUrl(`/schedule/previous/venue/${idVenue}`));
  return data;
};

// ===== FULL SEASON SCHEDULE =====
export const getFullTeamSeasonSchedule = async (idTeam: string) => {
  const { data } = await axios.get(buildUrl(`/schedule/full/team/${idTeam}`));
  return data;
};

export const getFullLeagueSeasonSchedule = async (idLeague: string, season: string) => {
  const { data } = await axios.get(buildUrl(`/schedule/league/${idLeague}/${season}`));
  return data;
};
