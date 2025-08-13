import { Competition } from "@/types/types";

type Props = {
    leagues: Competition[];
    selectedLeague: Competition | undefined;
    onChange: (value: Competition) => void;
    loading?: boolean
}

export default function LeagueDropdown({ leagues, selectedLeague, onChange, loading }: Props) {

    function updateLeague(e: React.ChangeEvent<HTMLSelectElement>) {
        const l = leagues.find((l) => l.id == e.target.value);
        console.log('hello', e.target.value, l)
        if (l) {
            onChange(l);
        }
    }

    return (
        <label className="flex w-full max-w-sm items-center gap-2 rounded-2xl border border-emerald-800 bg-black/40 p-2 text-sm text-emerald-100 focus-within:ring-2 focus-within:ring-emerald-500">
            <span className="pl-2"></span>
            <select
                className="flex-1 rounded-xl bg-transparent p-2 outline-none"
                defaultValue={selectedLeague?.id}
                onChange={updateLeague}
                aria-busy={loading}
                aria-label="Select league"
            >
                <option value="" disabled className="bg-black">
                    {loading ? "Loading leagues..." : "Choose a league"}
                </option>
                {leagues?.map((l) => (
                    <option key={l.id} value={l.id} className="bg-black">
                        {l.name}
                    </option>
                ))}
            </select>
        </label>
    );
}
