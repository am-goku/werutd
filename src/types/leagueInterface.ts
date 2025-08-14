export interface TableTeam {
    position: number;
    team: {
        id: number;
        name: string;
        shortName: string;
        tla: string;
        crest: string;
    };
    playedGames: number;
    form: string;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}

export interface LeagueTableData {
    stage: string;
    type: string;
    group: string | null;
    table: TableTeam[];
}

export type PlayerStats = {
  player: {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string; // ISO date format
    nationality: string;
    section: string;
    position: string | null;
    shirtNumber: number | null;
    lastUpdated: string; // ISO datetime format
  };
  team: {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: string; // ISO datetime format
  };
  playedMatches: number;
  goals: number;
  assists: number;
  penalties: number | null;
};
