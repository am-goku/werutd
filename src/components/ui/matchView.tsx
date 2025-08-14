import ErrorState from "./errorState";
import LeagueDropdown from "./leagueDropdown";
import { Competition } from "@/types/types";
import { useCallback, useEffect, useState } from "react";
import { getCompetitions } from "@/services/apis/localHandler";
import LeagueMatches from "../pages/leagueMatches";
import LeagueTable from "../pages/leagueTable";
function MatchesView() {
    // Load leagues
    const [leaguesLoading, setLeaguesLoading] = useState(false);

    // Tabs
    const [tab, setTab] = useState<"table" | "matches">("matches");

    // Error states
    const [leaguesError, setLeaguesError] = useState(false);

    // League states
    const [leagues, setLeagues] = useState<Competition[]>([])

    // Single league states
    const [selectedLeague, setSelectedLeague] = useState<Competition | undefined>();

    // Fetch leagues
    const fetchLeagues = useCallback(() => {
        setLeaguesLoading(true);
        getCompetitions().then((res) => {
            setLeagues(res.data.competitions);
        }).catch((err) => {
            console.error(err);
            setLeaguesError(true);
        }).finally(() => setLeaguesLoading(false));
    }, []);

    useEffect(() => {
        fetchLeagues();
    }, [fetchLeagues])

    useEffect(() => {
        if (leagues.length > 0 && !selectedLeague) {
            setSelectedLeague(leagues[0]);
        }
    }, [leagues, selectedLeague]);


    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-6">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                    <h2 onClick={()=>setTab("matches")} className="text-xl font-semibold text-emerald-100 cursor-pointer">Matches</h2>
                    <h2 onClick={()=>setTab("table")} className="text-xl font-semibold text-emerald-100 cursor-pointer">Table</h2>
                </div>
                <LeagueDropdown
                    leagues={leagues || []}
                    selectedLeague={selectedLeague}
                    onChange={setSelectedLeague}
                    loading={leaguesLoading}
                />
            </div>

            {leaguesError && <ErrorState message={(leaguesError as unknown as Error)?.message} onRetry={() => fetchLeagues()} />}

            {
                selectedLeague && tab === "matches" ? (
                    <LeagueMatches selectedLeague={selectedLeague} />
                ) : (
                    <LeagueTable selectedLeague={selectedLeague} />
                )
            }

        </section>
    );
}

export default MatchesView;