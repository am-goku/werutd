import { TeamLogo } from "../logo";
import StatRow from "./statRow";
import { motion } from "framer-motion"
import { toLocalTime } from "@/lib/utils";
import { MatchData } from "@/types/matchInterface";
import { useState } from "react";
import { MatchStatsModal } from "../modal/matchStatsModal";

function MatchCard({ match }: { match: MatchData }) {
    const { homeTeam, awayTeam, status, score, utcDate } = match;
    const [statModal, setStatModal] = useState<boolean>(false);
    return (
        <>
            <motion.article
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="group rounded-2xl cursor-pointer border border-emerald-800/40 bg-gradient-to-b from-emerald-950/60 to-black p-4 shadow hover:shadow-emerald-900/40"
                role="region"
                onClick={() => setStatModal(true)}
                aria-label={`${homeTeam.name} vs ${awayTeam.name}`}
            >
                <header className="mb-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <TeamLogo team={homeTeam} />
                        <span className="font-semibold text-emerald-100">{homeTeam.name}</span>
                    </div>
                    <div className="text-xs text-emerald-400">vs</div>
                    <div className="flex items-center gap-3">
                        <span className="font-semibold text-emerald-100">{awayTeam.name}</span>
                        <TeamLogo team={awayTeam} />
                    </div>
                </header>

                <div className="mb-3 flex items-center justify-between text-sm">
                    <div className="rounded-full border border-emerald-800 px-2 py-1 text-emerald-300">
                        {status === "TIMED" && <span>Kick-off: {toLocalTime(utcDate)}</span>}
                        {status === "LIVE" && <span className="text-red-400">LIVE</span>}
                        {status === "FINISHED" && <span>FT</span>}
                    </div>
                    <div className="text-right text-emerald-100">
                        {status !== "SCHEDULED" ? (
                            <div className="rounded-xl bg-emerald-900/40 px-2 py-1 font-mono text-base">
                                {score?.fullTime.home ?? 0} - {score?.fullTime.away ?? 0}
                            </div>
                        ) : (
                            <div className="text-emerald-300">{toLocalTime(utcDate)}</div>
                        )}
                    </div>
                </div>

                {
                    homeTeam.statistics && awayTeam.statistics && (
                        <div className="space-y-2">
                            <StatRow label="Possession %" home={homeTeam?.statistics.ball_possession} away={awayTeam?.statistics.ball_possession} />
                            <StatRow label="Shots" home={homeTeam.statistics.shots} away={awayTeam.statistics.shots} />
                            <StatRow label="Fouls" home={homeTeam.statistics.fouls} away={awayTeam.statistics.fouls} />
                        </div>
                    )
                }
            </motion.article>

            {statModal && <MatchStatsModal matchId={match.id} onClose={() => setStatModal(false)} />}
        </>
    );
}

export default MatchCard;