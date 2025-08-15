// services/apis/sportsdb/v2/search.ts

import axios from "axios";

const BASE_URL_V2 = "https://www.thesportsdb.com/api/v2/json";

/**
 * Helper to construct v2 API URLs
 */
const buildUrl = (endpoint: string) => `${BASE_URL_V2}${endpoint}`;

/**
 * Search for any sports league
 * @param leagueName - Name of the league (use underscores for spaces)
 */
export const searchLeague = async (leagueName: string) => {
  const { data } = await axios.get(buildUrl(`/search/league/${leagueName}`));
  return data;
};

/**
 * Search for any sports team
 * @param teamName - Name of the team (use underscores for spaces)
 */
export const searchTeam = async (teamName: string) => {
  const { data } = await axios.get(buildUrl(`/search/team/${teamName}`));
  return data;
};

/**
 * Search for any sports player
 * @param playerName - Name of the player (use underscores for spaces)
 */
export const searchPlayer = async (playerName: string) => {
  const { data } = await axios.get(buildUrl(`/search/player/${playerName}`));
  return data;
};

/**
 * Search for any sports event
 * @param eventName - Event string (format: event_name_yyyy-mm-dd_team1_vs_team2)
 */
export const searchEvent = async (eventName: string) => {
  const { data } = await axios.get(buildUrl(`/search/event/${eventName}`));
  return data;
};

/**
 * Search for any sports venue
 * @param venueName - Name of the venue (use underscores for spaces)
 */
export const searchVenue = async (venueName: string) => {
  const { data } = await axios.get(buildUrl(`/search/venue/${venueName}`));
  return data;
};
