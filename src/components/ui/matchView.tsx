import { cn } from "@/lib/utils";
import ErrorState from "./errorState";
import MatchCard from "./matchCard";
import LoadingSpinner from "./spinner";
import LeagueDropdown from "./leagueDropdown";
import { Competition } from "@/types/types";
import { useCallback, useEffect, useState } from "react";
import { getCompetitionMatches, getCompetitions } from "@/services/apis/localHandler";
import { MatchData } from "@/types/matchInterface";
function MatchesView() {
    // Load leagues
    const [leaguesLoading, setLeaguesLoading] = useState(false);
    const [matchesLoading, setMatchesLoading] = useState(false);

    // Error states
    const [leaguesError, setLeaguesError] = useState(false);
    const [matchesError, setMatchesError] = useState(false);

    // League states
    const [leagues, setLeagues] = useState<Competition[]>([])

    // Single league states
    const [selectedLeague, setSelectedLeague] = useState<Competition | undefined>();

    // Match states
    const [matches, setMatches] = useState<MatchData[]>([]);

    // Fetch matches
    const fetchMatches = useCallback(() => {
        if (!selectedLeague) return;
        setMatchesLoading(true);
        getCompetitionMatches(selectedLeague.id, { matchday: selectedLeague.currentSeason.currentMatchday })
            .then((res) => {
                console.log(res)
                setMatches(res.data.competition.matches);
            })
            .catch((err) => {
                console.error(err);
                setMatchesError(true);
            })
            .finally(() => setMatchesLoading(false));
    }, [selectedLeague]);

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
        fetchMatches();
    }, [fetchMatches]);

    useEffect(() => {
        fetchLeagues();
    }, [fetchLeagues])

    useEffect(() => {
        if (leagues.length > 0 && !selectedLeague) {
            setSelectedLeague(leagues[0]);
        }
    }, [leagues, selectedLeague]); // removed selectedLeague from deps


    return (
        <section className="mx-auto w-full max-w-6xl px-4 py-6">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <h2 className="text-xl font-semibold text-emerald-100">Matches</h2>
                <LeagueDropdown
                    leagues={leagues || []}
                    selectedLeague={selectedLeague}
                    onChange={setSelectedLeague}
                    loading={leaguesLoading}
                />
            </div>

            {leaguesError && <ErrorState message={(leaguesError as unknown as Error)?.message} onRetry={() => fetchLeagues()} />}

            {matchesLoading && (
                <div className="mt-4">
                    <LoadingSpinner label="Fetching matches..." />
                </div>
            )}

            {matchesError && <ErrorState message={(matchesError as unknown as Error)?.message} onRetry={() => fetchMatches()} />}

            {/* Matches Grid */}
            <div
                className={cn(
                    "grid gap-4",
                    "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                    matchesLoading ? "opacity-60" : "opacity-100"
                )}
            >
                {matches?.map((m) => (
                    <MatchCard key={m.id} match={m} />)
                )}
            </div>

            {!matchesLoading && matches && matches.length === 0 && (
                <p className="mt-6 text-sm text-emerald-300">No matches found for this league.</p>
            )}
        </section>
    );
}

export default MatchesView;