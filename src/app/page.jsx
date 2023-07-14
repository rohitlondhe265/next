'use client'
import { useEffect } from 'react'
import Test from "@/components/Test";
import Timer from "@/components/Timer";
import { apiUrl } from '@/lib/database/constants';
import { useSelector } from 'react-redux';
import { getServerData } from '@/lib/hooks/helper/helper';

export default function page() {
  
  const { category, set } = useSelector(state => state.result);
  console.log(category+set)
  useEffect(async () => {
    const q = await getServerData(`${apiUrl}/questions?set=3&category=Talathi`, (data) => data)
    // const q = (await axios.get(`${apiUrl}/questions?set=3&category=Talathi`)).data
    console.log(q)
  }, [])

  return (
    <div className="">page
      <Test />
      <Timer seconds={120} />
    </div>
  )
}