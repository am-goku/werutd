const API_ENDPOINTS = {
    area: (id: string | number) => `/areas/${id}`,
    areas: "/areas/",

    competition: (code: string) => `/competitions/${code}`,
    competitions: "/competitions",

    competitionStandings: (id: string | number) => `/competitions/${id}/standings`,
    competitionMatches: (id: string | number) => `/competitions/${id}/matches`,
    competitionTeams: (id: string | number) => `/competitions/${id}/teams`,
    competitionTopScorers: (id: string | number) => `/competitions/${id}/scorers`,

    team: (id: string | number) => `/teams/${id}`,
    teams: "/teams/",
    teamMatches: (id: string | number) => `/teams/${id}/matches/`,

    person: (id: string | number) => `/persons/${id}`,
    personMatches: (id: string | number) => `/persons/${id}/matches`,

    match: (id: string | number | number) => `/matches/${id}`,
    matches: "/matches",
    matchHead2Head: (id: string | number) => `/matches/${id}/head2head`
};

export default API_ENDPOINTS;