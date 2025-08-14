'use client'

import { MatchData } from '@/types/matchInterface';
import React, { useCallback, useEffect, useState } from 'react'
import LoadingSpinner from '../ui/spinner';
import ErrorState from '../ui/errorState';
import { cn } from '@/lib/utils';
import MatchCard from '../ui/matchCard';
import { getCompetitionMatches } from '@/services/apis/localHandler';
import { Competition } from '@/types/types';

type Props = {
    selectedLeague: Competition | undefined;
}

function LeagueMatches({ selectedLeague }: Props) {

    const [matchesLoading, setMatchesLoading] = useState(false);
    const [matchesError, setMatchesError] = useState(false);
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

    useEffect(() => {
        fetchMatches();
    }, [fetchMatches]);


    return (
        <>
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
        </>
    )
}

export default LeagueMatches