"use client"

import { getActivity } from "@/actions/activites"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"


export default function ActivityPage() {
    const {id} = useParams()
    const [activity, setActivity] = useState (null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const data = await getActivity(id)
            setActivity(data)
            setLoading(false)
        }
        fetchData()
    }, [id])
    if (loading) return <p>igang</p>
    if (!activity) return <p>Ikke fundet :| </p>
    
    return (
        <section className="min-h-screen flex flex-col items-center">
            <div>
            <Image
                src={activity.asset?.url}
                height={200}
                width={200}
                decoding="async" // siger inspect tool
                alt={activity.name}
            
            />

        </div>
        </section>
    )

    
}

