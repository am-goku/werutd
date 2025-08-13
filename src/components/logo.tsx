// import { cn } from "@/lib/utils";
// import { Match } from "@/types/matchInterface";
// import { useMemo } from "react";

// export function srOnly(text: string) {
//   return <span className="sr-only">{text}</span>;
// }

// // Simple inline logo placeholder: circle with initials
// export function TeamLogo({ team, size = 36 }: {team: Match["homeTeam"], size?: number}) {
//   const initials = useMemo(() => team.shortName?.slice(0, 3).toUpperCase() || team.name.slice(0, 3).toUpperCase(), [team.shortName, team.name]);
//   const bgClass = useMemo(() => {
//     const pool = ["bg-emerald-600", "bg-emerald-500", "bg-green-600", "bg-lime-600"]; // green-ish variety
//     const idx = Math.abs([...initials].reduce((a, c) => a + c.charCodeAt(0), 0)) % pool.length;
//     return pool[idx];
//   }, [initials]);
//   return (
//     <div
//       aria-label={`${team.name} logo`}
//       className={cn("flex items-center justify-center rounded-full text-xs font-bold text-white shadow", bgClass)}
//       style={{ width: size, height: size }}
//     >
//       {initials}
//     </div>
//   );
// }

import { MatchData } from "@/types/matchInterface";
import { useMemo } from "react";

export function srOnly(text: string) {
  return <span className="sr-only">{text}</span>;
}

// Team logo component with crest image support, uniform size, no background color
export function TeamLogo({ team, size = 36 }: { team: MatchData["homeTeam"]; size?: number }) {
  const initials = useMemo(
    () =>
      team?.shortName?.slice(0, 3).toUpperCase() ||
      team?.name?.slice(0, 3).toUpperCase() || 'TBD',
    [team.shortName, team.name]
  );

  return (
    <div
      aria-label={`${team.name} logo`}
      className="flex items-center justify-center rounded-full overflow-hidden"
      style={{ width: size, height: size }}
    >
      {team.crest ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={team.crest}
          alt={`${team.name} crest`}
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="text-xs font-bold text-gray-700">{initials}</span>
      )}
    </div>
  );
}
