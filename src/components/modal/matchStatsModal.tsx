import { motion } from "framer-motion";
import { MatchData } from "@/types/matchInterface";
import { srOnly } from "../logo";
import { TeamLogo } from "../logo";
import { useEffect, useState } from "react";
import { mapStats, StatDisplay } from "@/utils/sanitizer";
import { getMatch } from "@/services/apis/localHandler";

interface MatchStatsModalProps {
    matchId: string | number;
    onClose: () => void;
}

export function MatchStatsModal({ matchId, onClose }: MatchStatsModalProps) {
    const [match, setmatch] = useState<MatchData>();
    const [stats, setStats] = useState<StatDisplay[]>();

    useEffect(() => {
        if (matchId) {
            getMatch(matchId).then((res) => {
                setmatch(res.data.match)
            }).catch((err) => {
                console.log('Error fetching match', err)
            })
        }
    }, [matchId])

    useEffect(() => {
        if (match) {
            const statistics = mapStats(match?.homeTeam.statistics, match?.awayTeam.statistics);
            setStats(statistics)
        }
    }, [match]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl rounded-2xl border border-emerald-800/40 bg-gradient-to-b from-emerald-950/90 to-black shadow-lg overflow-hidden"
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-emerald-800/40 p-4">
                    <h2 className="text-lg font-semibold text-emerald-100">Match Details</h2>
                    <button onClick={onClose} className="text-emerald-300 hover:text-emerald-100">✕</button>
                </div>

                {/* Match Info */}
                <div className="grid gap-2 p-4 text-emerald-200 text-sm sm:grid-cols-2">
                    {match?.competition && <div><strong>Competition:</strong> {match?.competition?.name}</div>}
                    {match?.referees && match?.referees?.length > 0 && <div><strong>Referee:</strong> {match?.referees[0]?.name}</div>}
                    {match?.venue && <div><strong>Venue:</strong> {match?.venue}</div>}
                    {match?.utcDate && <div><strong>Date:</strong> {new Date(match?.utcDate).toLocaleString()}</div>}
                </div>

                {/* Stats Section */}
                <div className="border-t border-b border-emerald-800/40 p-4">
                    <h3 className="mb-3 text-emerald-100 font-semibold">Match Statistics</h3>
                    <div className="space-y-2">
                        {stats?.map((stat, idx) => (
                            <div key={idx} className="flex items-center justify-between text-sm text-emerald-300">
                                <span>{stat.label}</span>
                                <span>{stat.home}</span>
                                <span>{stat.away}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lineups */}
                {match && (
                    <div className="p-4">
                        {[match?.homeTeam, match?.awayTeam].map((team, idx) => (
                            <div key={idx} className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <TeamLogo team={team} size={32} />
                                    <span className="text-emerald-100 font-semibold">{team.name}</span>
                                </div>
                                <div>
                                    <h4 className="text-emerald-300 font-medium mb-1">Starting XI</h4>
                                    <ul className="list-disc list-inside text-emerald-200 text-sm">
                                        {team?.lineup?.map((player, i) => (
                                            <li key={i}>{player.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-3">
                                    <h4 className="text-emerald-300 font-medium mb-1">Substitutes</h4>
                                    <ul className="list-disc list-inside text-emerald-200 text-sm">
                                        {team?.bench?.map((player, i) => (
                                            <li key={i}>{player.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-3">
                                    <h4 className="text-emerald-300 font-medium mb-1">Manager</h4>
                                    <p className="text-emerald-200 text-sm">{team?.coach?.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}
