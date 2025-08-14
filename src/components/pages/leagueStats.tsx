import { getCompetitionTopScorers } from '@/services/apis/localHandler';
import { PlayerStats } from '@/types/leagueInterface';
import React, { useCallback, useEffect, useState } from 'react'

type Props = {
    id: string | number | undefined;
}

function sortPlayersByGoals(players: PlayerStats[]): PlayerStats[] {
    return [...players].sort((a, b) => b.goals - a.goals);
}

function LeagueStats({ id }: Props) {

    const [scorers, setScorers] = useState<PlayerStats[]>()

    const fetchScorers = useCallback(async () => {
        if (id) {
            try {
                const res = (await getCompetitionTopScorers(id)).data;
                const sortedPlayers = sortPlayersByGoals(res?.competition?.scorers);
                setScorers(sortedPlayers);
            } catch (error) {
                console.log(error)
            }
        }
    }, [id])

    // key.replace(/([A-Z])/g, ' $1')

    useEffect(() => {
        fetchScorers()

        return() => {
            setScorers(undefined)
        }
    }, [fetchScorers])

    return (
        <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* {Object.entries(mockStats).map(([key, players]) => ( */}
                <div key={'top-scrorer'} className="bg-emerald-900 rounded-lg p-4 border border-emerald-700">
                    <h4 className="text-emerald-100 font-semibold mb-3 capitalize">{'Top Scorers'}</h4>
                    <ul className="space-y-2">
                        {scorers?.map((s, idx) => (
                            <li
                                key={idx}
                                className={`flex justify-between text-sm px-2 py-1 ${idx % 2 === 0 ? "bg-emerald-900 text-emerald-50" : "bg-emerald-800 text-emerald-50"
                                    }`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={s.team.crest} alt={s.team.name} className="h-5 w-5" />
                                <span>{s.player.name}</span>
                                <span>{s.goals} ({s.playedMatches})</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* ))} */}
            </div>
        </>
    )
}

export default LeagueStats