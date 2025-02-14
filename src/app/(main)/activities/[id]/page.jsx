"use client"

import { getActivity, joinActivity, leaveActivity } from "@/actions/activites"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"


export default function ActivityPage() {
    const {id} = useParams()
    const [activity, setActivity] = useState (null)
    const [loading, setLoading] = useState(true)
    const [isParticipating, setIsParticipating] = useState(false)

    useEffect(() => {
        async function fetchData() {
            const data = await getActivity(id)
            setActivity(data)
            setLoading(false)
        }
        fetchData()
    }, [id])

    // async function handleJoin() {
    //     await joinActivity(id)
    //     setIsParticipating(true)
    // }

    // async function handleLeave() {
    //     await leaveActivity(id)
    //     setIsParticipating(false)
    // }



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

            <button className="absolute bottom-5 left-1/2 p-3 rounded-lg shadow-mw w-2/4 bg-[var(--color-dark-purple)] text-white">tilmeld</button>
            

{/* <button onClick={isParticipating ? handleLeave : handleJoin} className={`absolute bottom-5 left-1/2 p-3 rounded-lg shadow-md w-2/4  ${isParticipating ? "bg-red-600 text-white" : "bg-[var(--color-dark-purple)] text-[var(--color-light-gray)]"}`}>
            {isParticipating ? "Afmeld" : "Tilmeld"}
            </button> */}
            </div>
            <article className="w-full text-white">
            <h1 className="text-lg mt-5">{activity.name}</h1>
            <p className="text-md"> {activity.minAge} - {activity.maxAge} år</p>
            <p className="text-sm mt-2">{activity.description}</p>
            </article>
        </section>
    )

    
}

