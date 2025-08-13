export type League = { id: string; name: string };

export type Match = {
    id: string;
    leagueId: string;
    utcKickoff: string; // ISO
    home: Team;
    away: Team;
    status: "SCHEDULED" | "LIVE" | "FINISHED";
    score?: { home: number; away: number };
    stats?: {
        possessionHome?: number;
        possessionAway?: number;
        shotsHome?: number;
        shotsAway?: number;
        cardsHome?: number;
        cardsAway?: number;
    };
};

export interface Competition {
    id: number|string;
    area: {
        id: number;
        name: string;
        code: string;
        flag: string;
    };
    name: string;
    code: string;
    type: string; // Could be union type if possible values are known, e.g., 'LEAGUE' | 'CUP'
    emblem: string;
    plan: string; // Could also be narrowed if known values like 'TIER_ONE'
    currentSeason: {
        id: number;
        startDate: string; // ISO date string, format 'yyyy-MM-dd'
        endDate: string;   // ISO date string
        currentMatchday: number;
        winner: string | null; // Could be an object if winner data is provided elsewhere
    };
    numberOfAvailableSeasons: number;
    lastUpdated: string; // ISO timestamp
}

export type Team = { name: string; short: string; logoUrl?: string };

export type MatchParams = {
    dateFrom?: string;
    dateTo?: string;
    matchday?: number|string;
    season?: string;
};