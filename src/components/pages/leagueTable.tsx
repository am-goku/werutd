import React, { useCallback, useEffect, useState } from "react";
import ErrorState from "../ui/errorState";
import LoadingSpinner from "../ui/spinner";
import { Competition } from "@/types/types";
import { getCompetitionStandings } from "@/services/apis/localHandler";
import { LeagueTableData } from "@/types/leagueInterface";
import LeagueStats from "./leagueStats";

const seasons = ["2024/2025", "2023/2024", "2022/2023"];

const LeagueTable = ({ selectedLeague }: { selectedLeague: Competition | undefined }) => {
    const [standings, setStandings] = useState<LeagueTableData[]>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [selectedSeason, setSelectedSeason] = useState("2024/2025");
    const [view, setView] = useState<"table" | "stats">("table");

    // Fetching League Table
    const fetchStandings = useCallback(async () => {
        if (selectedLeague) {
            setLoading(true);
            setError(null);
            try {
                const res = await getCompetitionStandings(selectedLeague?.id);
                console.log(res)
                setStandings(res.data.competition.standings);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }
    }, [selectedLeague]);

    useEffect(() => {
        if (selectedLeague) {
            fetchStandings();
        }
    }, [selectedLeague, fetchStandings]);

    return (
        <>
            {error && <ErrorState message={error} onRetry={fetchStandings} />}

            {loading && (
                <div className="mt-4">
                    <LoadingSpinner label="Fetching standings..." />
                </div>
            )}

            {!loading && standings && (
                <>
                    <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <select
                            value={selectedSeason}
                            onChange={(e) => setSelectedSeason(e.target.value)}
                            className="rounded-md border border-emerald-700 bg-emerald-900 px-3 py-2 text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        >
                            {seasons.map((season) => (
                                <option key={season} value={season}>{season}</option>
                            ))}
                        </select>
                        <div className="flex gap-2">
                            <button onClick={() => setView("table")} className={`px-3 py-2 rounded-md ${view === "table" ? "bg-emerald-700" : "bg-emerald-900"} text-emerald-100`}>Table</button>
                            <button onClick={() => setView("stats")} className={`px-3 py-2 rounded-md ${view === "stats" ? "bg-emerald-700" : "bg-emerald-900"} text-emerald-100`}>Stats</button>
                        </div>
                    </div>

                    {/* TABLE SECTION */}
                    {view === "table" && (
                        standings.length > 0 ? (
                            standings.map((standing) => (
                                <div key={standing.group} className="overflow-x-auto rounded-lg border mb-5 border-emerald-700">
                                    <table className="min-w-full divide-y divide-emerald-700">
                                        <thead className="bg-emerald-900">
                                            <tr>
                                                {[
                                                    "Pos",
                                                    "Team",
                                                    "P",
                                                    "W",
                                                    "D",
                                                    "L",
                                                    "GF",
                                                    "GA",
                                                    "GD",
                                                    "Pts",
                                                ].map((header) => (
                                                    <th
                                                        key={header}
                                                        className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-emerald-100"
                                                    >
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-emerald-800 bg-emerald-950">
                                            {standing && standing?.table?.map((row, idx) => (
                                                <tr key={row.team.id || idx}>
                                                    <td className="px-4 py-2 text-sm text-emerald-50">{row.position}</td>
                                                    <td className="px-4 py-2 flex items-center gap-2 text-sm text-emerald-50">
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img src={row.team.crest} alt={row.team.name} className="h-5 w-5" />
                                                        {row.team.shortName || "TBD"}
                                                    </td>
                                                    <td className="px-4 py-2 text-sm text-emerald-50">{row.playedGames}</td>
                                                    <td className="px-4 py-2 text-sm text-emerald-50">{row.won}</td>
                                                    <td className="px-4 py-2 text-sm text-emerald-50">{row.draw}</td>
                                                    <td className="px-4 py-2 text-sm text-emerald-50">{row.lost}</td>
                                                    <td className="px-4 py-2 text-sm text-emerald-50">{row.goalsFor}</td>
                                                    <td className="px-4 py-2 text-sm text-emerald-50">{row.goalsAgainst}</td>
                                                    <td className="px-4 py-2 text-sm text-emerald-50">{row.goalDifference}</td>
                                                    <td className="px-4 py-2 text-sm font-semibold text-emerald-100">{row.points}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            ))
                        ) : (
                            <div className="overflow-x-auto rounded-lg border border-emerald-700">
                                <table className="min-w-full divide-y divide-emerald-700">
                                    <thead className="bg-emerald-900">
                                        <tr>
                                            {[
                                                "Pos",
                                                "Team",
                                                "P",
                                                "W",
                                                "D",
                                                "L",
                                                "GF",
                                                "GA",
                                                "GD",
                                                "Pts",
                                                // "Form",
                                            ].map((header) => (
                                                <th
                                                    key={header}
                                                    className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-emerald-100"
                                                >
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-emerald-800 bg-emerald-950">
                                        {standings && standings[0]?.table?.map((row, idx) => (
                                            <tr key={row.team.id || idx}>
                                                <td className="px-4 py-2 text-sm text-emerald-50">{row.position}</td>
                                                <td className="px-4 py-2 flex items-center gap-2 text-sm text-emerald-50">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={row.team.crest} alt={row.team.name} className="h-5 w-5" />
                                                    {row.team.shortName}
                                                </td>
                                                <td className="px-4 py-2 text-sm text-emerald-50">{row.playedGames}</td>
                                                <td className="px-4 py-2 text-sm text-emerald-50">{row.won}</td>
                                                <td className="px-4 py-2 text-sm text-emerald-50">{row.draw}</td>
                                                <td className="px-4 py-2 text-sm text-emerald-50">{row.lost}</td>
                                                <td className="px-4 py-2 text-sm text-emerald-50">{row.goalsFor}</td>
                                                <td className="px-4 py-2 text-sm text-emerald-50">{row.goalsAgainst}</td>
                                                <td className="px-4 py-2 text-sm text-emerald-50">{row.goalDifference}</td>
                                                <td className="px-4 py-2 text-sm font-semibold text-emerald-100">{row.points}</td>
                                                {/* <td className="px-4 py-2">{renderFormDots(row.form)}</td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )
                    )}


                    {view === "stats" && (
                        <LeagueStats id={selectedLeague?.id} />
                    )}
                </>
            )
            }

            {!loading && standings && standings[0]?.table?.length === 0 && (
                <p className="mt-6 text-sm text-emerald-300">No standings found for this league.</p>
            )}
        </>
    );
};


export default LeagueTable;