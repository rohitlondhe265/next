// 'use client'

import React, { useEffect, useState } from 'react'
import { getServerData } from '../lib/hooks/helper/helper'
import { apiUrl } from '@/lib/database/constants'
import result from '@/lib/database/data/result'

export default function ResultTable() {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     getServerData(`${apiUrl}/result`, (res) => {
    //         setData(res)
    //     })
    // })
    const data = result;

  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Exam Name</td>
                    <td>Attempted Questions</td>
                    <td>Earned Points</td>
                    <td>Performance</td>
                </tr>
            </thead>
            <tbody>
                { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => (
                        <tr className='table-body' key={i}>
                            <td>{v?.username || ""}</td>
                            <td>{v?.exam || ""}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.performance || ""}</td>
                        </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}
