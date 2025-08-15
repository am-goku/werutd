// services/apis/sportsdb/v2/filter.ts

import axios from "axios";

const BASE_URL_V2 = "https://www.thesportsdb.com/api/v2/json";

const buildUrl = (endpoint: string) => `${BASE_URL_V2}${endpoint}`;

// ===== TV EVENT FILTERS =====
export const filterTvEventsByDate = async (dateEvent: string) => {
  const { data } = await axios.get(buildUrl(`/filter/tv/day/${dateEvent}`));
  return data;
};

export const filterTvEventsByCountry = async (strCountry: string) => {
  const { data } = await axios.get(
    buildUrl(`/filter/tv/country/${encodeURIComponent(strCountry)}`)
  );
  return data;
};

export const filterTvEventsBySport = async (strSport: string) => {
  const { data } = await axios.get(
    buildUrl(`/filter/tv/sport/${encodeURIComponent(strSport)}`)
  );
  return data;
};

export const filterTvEventsByChannel = async (strChannel: string) => {
  const { data } = await axios.get(
    buildUrl(`/filter/tv/channel/${encodeURIComponent(strChannel)}`)
  );
  return data;
};

export const filterTvEventsByChannelId = async (idChannel: string | number) => {
  const { data } = await axios.get(
    buildUrl(`/filter/tv/channelid/${idChannel}`)
  );
  return data;
};
