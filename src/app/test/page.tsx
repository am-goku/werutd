'use client'

import { getCompetitions } from '@/services/apis/apiHandler';

import React, { useEffect, useState } from 'react'

function Page() {

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        getCompetitions().then((res) => {
            console.log(res)
        }).catch((err) => console.log(err))
    })

  return (
    <div className='text-white'>
        {/* {
            leagues?.map((l: any) => (
                <div key={l.id}>{l.name}</div>
            ))
        } */}
    </div>
  )
}

export default Page