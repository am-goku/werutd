import API_ENDPOINTS from "@/contstants/apiEndpoints";
import { footballApi } from "@/lib/axios";
import { MatchParams } from "@/types/types";

// ----- AREA -----
export const getArea = (id: string) => footballApi.get(API_ENDPOINTS.area(id));
export const getAreas = () => footballApi.get(API_ENDPOINTS.areas);

// ----- COMPETITIONS -----
export const getCompetition = (code: string) => footballApi.get(API_ENDPOINTS.competition(code));
export const getCompetitions = (params?: Record<string, unknown>) => footballApi.get(API_ENDPOINTS.competitions, { params });

export const getCompetitionStandings = (id: string, params?: Record<string, unknown>) =>
    footballApi.get(API_ENDPOINTS.competitionStandings(id), { params });

export const getCompetitionMatches = (id: string, params?: MatchParams) =>
    footballApi.get(API_ENDPOINTS.competitionMatches(id), { params });

export const getCompetitionTeams = (id: string, params?: Record<string, unknown>) =>
    footballApi.get(API_ENDPOINTS.competitionTeams(id), { params });

export const getCompetitionTopScorers = (id: string, params?: Record<string, unknown>) =>
    footballApi.get(API_ENDPOINTS.competitionTopScorers(id), { params });

// ----- TEAMS -----
export const getTeam = (id: string) => footballApi.get(API_ENDPOINTS.team(id));
export const getTeams = (params?: Record<string, unknown>) => footballApi.get(API_ENDPOINTS.teams, { params });

export const getTeamMatches = (id: string, params?: Record<string, unknown>) =>
    footballApi.get(API_ENDPOINTS.teamMatches(id), { params });

// ----- PERSONS -----
export const getPerson = (id: string) => footballApi.get(API_ENDPOINTS.person(id));
export const getPersonMatches = (id: string, params?: Record<string, unknown>) =>
    footballApi.get(API_ENDPOINTS.personMatches(id), { params });

// ----- MATCHES -----
export const getMatch = (id: string) => footballApi.get(API_ENDPOINTS.match(id));
export const getMatches = (params?: Record<string, unknown>) => footballApi.get(API_ENDPOINTS.matches, { params });

export const getMatchHead2Head = (id: string, params?: Record<string, unknown>) =>
    footballApi.get(API_ENDPOINTS.matchHead2Head(id), { params });