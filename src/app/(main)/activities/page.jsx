// brugt postman til fetch af activites for at se JSON format GET request

"use client"
import ActivityCard from "@/components/ActivityCard"
import { getActivities } from "@/actions/activites"
import { useEffect, useState } from "react"
import Link from "next/link"; 


export default function ActivititesPage() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getActivities();

            const sortedAges = data.sort((youngest, oldest) => youngest.minAge - oldest.minAge )

            setActivities(sortedAges);
        }
        fetchData();
    },[]);

// find ud af hvorfor den ikke virker med globals.css
    return (
<section className="min-h-screen p-6 bg-[#5E2E53]">
    <h1 className="mb-6 font-bold text-xl text-white">Aktiviteter</h1>
        <div className="grid gap-4">
            {activities.length > 0 ? (
                activities.map((activity) => (
                    <Link href={`/activities/${activity.id}`}>
                    <ActivityCard
                    key={activity.id}
                    name={activity.name}
                    image={activity.asset?.url}
                    minAge={activity.minAge}
                    maxAge={activity.maxAge}
                    />
                    </Link>
                ))
            ) : (
                <p>error ved loading</p>
            )}
        </div>
</section>
    )
}
