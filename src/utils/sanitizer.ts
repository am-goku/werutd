import { TeamStatistics } from "@/types/matchInterface";

export interface StatDisplay {
    label: string;
    home: number;
    away: number;
}

export function mapStats(homeStats: TeamStatistics, awayStats: TeamStatistics): StatDisplay[] {

    if (!homeStats || !awayStats) {
        return [];
    }

    const labels: Record<keyof TeamStatistics, string> = {
        corner_kicks: "Corner Kicks",
        free_kicks: "Free Kicks",
        goal_kicks: "Goal Kicks",
        offsides: "Offsides",
        fouls: "Fouls",
        ball_possession: "Ball Possession (%)",
        saves: "Saves",
        throw_ins: "Throw Ins",
        shots: "Shots",
        shots_on_goal: "Shots on Goal",
        shots_off_goal: "Shots off Goal",
        yellow_cards: "Yellow Cards",
        yellow_red_cards: "Yellow-Red Cards",
        red_cards: "Red Cards",
    };

    return Object.keys(labels).map((key) => {
        const statKey = key as keyof TeamStatistics;
        return {
            label: labels[statKey],
            home: homeStats[statKey],
            away: awayStats[statKey],
        };
    });
}