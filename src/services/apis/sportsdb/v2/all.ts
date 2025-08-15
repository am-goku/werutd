// services/apis/sportsdb/v2/all.ts

import axios from "axios";

const BASE_URL_V2 = "https://www.thesportsdb.com/api/v2/json";

const buildUrl = (endpoint: string) => `${BASE_URL_V2}${endpoint}`;

// ===== ALL DATA =====
export const getAllCountries = async () => {
  const { data } = await axios.get(buildUrl("/all/countries"));
  return data;
};

export const getAllSports = async () => {
  const { data } = await axios.get(buildUrl("/all/sports"));
  return data;
};

export const getAllLeagues = async () => {
  const { data } = await axios.get(buildUrl("/all/leagues"));
  return data;
};
