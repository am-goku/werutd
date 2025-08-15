// services/apis/sportsdb/v2/lookup.ts

import axios from "axios";

const BASE_URL_V2 = "https://www.thesportsdb.com/api/v2/json";

const buildUrl = (endpoint: string) => `${BASE_URL_V2}${endpoint}`;

// ===== LEAGUE =====
export const lookupLeague = async (idLeague: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/league/${idLeague}`));
  return data;
};

// ===== TEAM =====
export const lookupTeam = async (idTeam: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/team/${idTeam}`));
  return data;
};

export const lookupTeamEquipment = async (idTeam: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/team_equipment/${idTeam}`));
  return data;
};

// ===== PLAYER =====
export const lookupPlayer = async (idPlayer: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/player/${idPlayer}`));
  return data;
};

export const lookupPlayerContracts = async (idPlayer: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/player_contracts/${idPlayer}`));
  return data;
};

export const lookupPlayerResults = async (idPlayer: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/player_results/${idPlayer}`));
  return data;
};

export const lookupPlayerHonours = async (idPlayer: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/player_honours/${idPlayer}`));
  return data;
};

export const lookupPlayerMilestones = async (idPlayer: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/player_milestones/${idPlayer}`));
  return data;
};

export const lookupPlayerFormerTeams = async (idPlayer: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/player_teams/${idPlayer}`));
  return data;
};

// ===== EVENT =====
export const lookupEvent = async (idEvent: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/event/${idEvent}`));
  return data;
};

export const lookupEventLineup = async (idEvent: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/event_lineup/${idEvent}`));
  return data;
};

export const lookupEventResults = async (idEvent: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/event_results/${idEvent}`));
  return data;
};

export const lookupEventStatistics = async (idEvent: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/event_stats/${idEvent}`));
  return data;
};

export const lookupEventTimeline = async (idEvent: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/event_timeline/${idEvent}`));
  return data;
};

export const lookupEventTVSchedule = async (idEvent: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/event_tv/${idEvent}`));
  return data;
};

export const lookupEventYoutubeHighlights = async (idEvent: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/event_highlights/${idEvent}`));
  return data;
};

// ===== VENUE =====
export const lookupVenue = async (idVenue: string | number) => {
  const { data } = await axios.get(buildUrl(`/lookup/venue/${idVenue}`));
  return data;
};
