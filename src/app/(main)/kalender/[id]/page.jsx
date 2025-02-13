"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { getActivity } from "@/actions/activites"

export default function instructorTrainerPage() {
    const { id } = useParams()
    const [activity, setActivity] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchActivity() {
            const data = await getActivity(id)
            setActivity(data)
            setLoading(false)
        }
        fetchActivity()
    }, [id]) 
    if (loading) return <p className="text-white text-center">indlæser dit træner skema kalender</p>
    if (!activity) return <p className="text-white text-center">Ingen ting fundet indlæsest forkert</p>

    return (
        <section>
            <h1 className="text-lg text-white font-bold">{activity.name}</h1>
            <div className="mt-4 text-white">
                {activity.users.length > 0 ? (
                activity.users.map((user) => (
                    <p key={user.id}>
                    {user.firstname} {user.lastname} - {user.role === "instructor" ? "instruktør" : "Deltager"}
                    </p>
                ))
            ) : (
                <p>Ingen Deltagere, endnu.</p>
            )}
            </div>
        </section>
    )
}