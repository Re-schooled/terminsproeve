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
            <div className="relative w-full h-60vh">
            <Image
                src={activity.asset?.url}
                height={200}
                width={200}
                decoding="async" // siger inspect tool
                alt={activity.name}
                className="w-full h-full object-cover"
            />

            <button className="absolute bg-[var(--color-dark-purple)] text-white left-[45%] rounded-lg bottom-8 w-2/4 p-3 shadow-md">Tilmeld</button>
            </div>
            <article className="w-full text-white">
            <h1 className="text-lg mt-5">{activity.name}</h1>
            <p className="text-md"> {activity.minAge} - {activity.maxAge} år</p>
            <p className="text-sm mt-2">{activity.description}</p>
            </article>
        </section>
    )

    
}

