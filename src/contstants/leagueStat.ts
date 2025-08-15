type Qualifier = {
    [key: string]:
    {
        champ_l?: number;
        euro_l?: number;
        conf_l?: number;
        champ_l_q?: number;
        euro_l_q?: number;
        conf_l_q?: number;

        rel_playOff?: number;
        rel?: number;
    }
}

export const leagueQualifier: Qualifier = {
    PL: {
        champ_l: 4,
        euro_l: 1,
        rel: 3
    },

    FL1: {
        champ_l: 3,
        champ_l_q: 1,
        euro_l: 1,
        conf_l: 1,
        rel_playOff: 1,
        rel: 3,
    },

    BL1: {
        champ_l: 4,
        euro_l: 1,
        conf_l: 1,
        rel_playOff: 1,
        rel: 2
    },

    SA: {
        champ_l: 4,
        euro_l: 1,
        conf_l: 1,
        rel: 3
    }
}

export function assignPosition(pos: number, l_code: string|undefined): string {
    if(!l_code) return '';
    const l_data = leagueQualifier[l_code];
    if (!l_data) return '';

    let currentPos = 1;

    // Champions League
    if (l_data.champ_l && pos <= l_data.champ_l) {
        return 'bg-blue-600'; // Champions League direct
    }
    currentPos += l_data.champ_l ?? 0;

    // Champions League Qualifier
    if (l_data.champ_l_q && pos <= currentPos + (l_data.champ_l_q - 1)) {
        return 'bg-blue-400';
    }
    currentPos += l_data.champ_l_q ?? 0;

    // Europa League
    if (l_data.euro_l && pos <= currentPos + (l_data.euro_l - 1)) {
        return 'bg-amber-500';
    }
    currentPos += l_data.euro_l ?? 0;

    // Europa League Qualifier
    if (l_data.euro_l_q && pos <= currentPos + (l_data.euro_l_q - 1)) {
        return 'bg-amber-300';
    }
    currentPos += l_data.euro_l_q ?? 0;

    // Conference League
    if (l_data.conf_l && pos <= currentPos + (l_data.conf_l - 1)) {
        return 'bg-green-500';
    }
    currentPos += l_data.conf_l ?? 0;

    // Conference League Qualifier
    if (l_data.conf_l_q && pos <= currentPos + (l_data.conf_l_q - 1)) {
        return 'bg-green-300';
    }

    // Relegation Playoff
    if (l_data.rel_playOff && pos > (getTotalTeams(l_code) - (l_data.rel_playOff + (l_data.rel ?? 0))) && pos <= (getTotalTeams(l_code) - (l_data.rel ?? 0))) {
        return 'bg-red-300';
    }

    // Relegation
    if (l_data.rel && pos > (getTotalTeams(l_code) - l_data.rel)) {
        return 'bg-red-600';
    }

    return ''; // default (mid-table)
}

// helper function — you can hardcode team counts or store them in leagueQualifier
function getTotalTeams(l_code: string): number {
    const teamCounts: { [key: string]: number } = {
        PL: 20,
        FL1: 18,
        BL1: 18,
        SA: 20
    };
    return teamCounts[l_code] || 20;
}