const API_ENDPOINTS = {
    area: (id: string) => `/areas/${id}`,
    areas: "/areas/",

    competition: (code: string) => `/competitions/${code}`,
    competitions: "/competitions",

    competitionStandings: (id: string) => `/competitions/${id}/standings`,
    competitionMatches: (id: string|number) => `/competitions/${id}/matches`,
    competitionTeams: (id: string) => `/competitions/${id}/teams`,
    competitionTopScorers: (id: string) => `/competitions/${id}/scorers`,

    team: (id: string) => `/teams/${id}`,
    teams: "/teams/",
    teamMatches: (id: string) => `/teams/${id}/matches/`,

    person: (id: string) => `/persons/${id}`,
    personMatches: (id: string) => `/persons/${id}/matches`,

    match: (id: string | number) => `/matches/${id}`,
    matches: "/matches",
    matchHead2Head: (id: string) => `/matches/${id}/head2head`
};

export default API_ENDPOINTS;