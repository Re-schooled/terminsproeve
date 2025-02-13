"use client"
import { useEffect, useState } from "react"
import { getUserCalendar, getInstructorCalendar } from "@/actions/kalender"
import Link from "next/link"

export default function CalendarPage() {
    const [activities, setActivities] = useState([])
    const [isInstructor, setIsInstructor] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchCalendar() {
            try {
            const userData = await getUserCalendar()
            
            if (!userData || !userData.role) {
                return
            }
            if (userData.role === "instructor") {
                const instructorActivities = await getInstructorCalendar()
                setIsInstructor(true)
                setActivities(instructorActivities)
            } else {
                setActivities(userData.activities || [])
            }
            } catch (error) {
            } finally {
                setLoading(false)
                }
            }
            fetchCalendar()
},
    [])
if (loading) return <p className="text-white text-center">indlæser kalender</p>
if (!activities || activities.length === 0) return <p className="text-white text-center">Ingen Aktiviteter fundet indlæses forkert</p>

return (
    <section className="p-6">
        <h1 className="text-xl font-bold text-white mb-6"></h1>
        <div className="grid gap-4">
        {activities.map((activty) => (
            <Link key={activty.id} href={isInstructor ? `/kalender/${activty.id}` : `/activities/${activty.id}`} >
            <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-black"> {activty.name} </h2>
            <p className="text-black"> {activty.weekday} - {activty.time}</p>
            </div>
            </Link>
        ))}
        </div>
    </section>
)

}