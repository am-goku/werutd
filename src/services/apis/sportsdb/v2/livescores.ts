// services/apis/sportsdb/v2/livescores.ts

import axios from "axios";

const BASE_URL_V2 = "https://www.thesportsdb.com/api/v2/json";

const buildUrl = (endpoint: string) => `${BASE_URL_V2}${endpoint}`;

// ===== LIVESCORES =====
export const getLivescoreBySport = async (sport: string) => {
  const { data } = await axios.get(buildUrl(`/livescore/${sport}`));
  return data;
};

export const getLivescoreByLeague = async (idLeague: string) => {
  const { data } = await axios.get(buildUrl(`/livescore/${idLeague}`));
  return data;
};

export const getAllLivescores = async () => {
  const { data } = await axios.get(buildUrl(`/livescore/all`));
  return data;
};
