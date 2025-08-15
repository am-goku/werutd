import { assignPosition } from '@/contstants/leagueStat';
import React from 'react'

type Props = {
    l_code: string | undefined;
    position: number;
    t_id: string | number;
    children: React.ReactNode
}

function LeagueTableRow({ l_code, t_id, position, children }: Props) {

    return (
        <tr key={t_id || position} className={`${assignPosition(position, l_code)}`}>
            {children}
        </tr>
    )
}

export default LeagueTableRow