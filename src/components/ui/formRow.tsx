import { cn } from '@/lib/utils';
import { TableTeam } from '@/types/leagueInterface';
import React from 'react'

type Props = {
    form: TableTeam['form']
}

function FormRow({ form }: Props) {

    const renderFormDots = (form: string) => {
        const results = form?.split(",");
        return (
            <div className="flex gap-1">
                {results?.map((res, idx) => {
                    let color = "bg-gray-500";
                    if (res === "W") color = "bg-green-500";
                    if (res === "D") color = "bg-yellow-400";
                    if (res === "L") color = "bg-red-500";
                    return <span key={idx} className={cn("h-3 w-3 rounded-full", color)} />;
                })}
            </div>
        );
    };

    return (
        <React.Fragment>
            <td className="px-4 py-2">{renderFormDots(form)}</td>
        </React.Fragment>
    )
}

export default FormRow