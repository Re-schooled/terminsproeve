// brugt postman til fetch af activites for at se JSON format GET request

"use client"
import { getActivities } from "@/actions/activites"
import { useEffect, useState } from "react"
import ActivityList from "@/components/ActivityList";


export default function ActivitiesPage() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getActivities();

            const sortedAges = data.sort((youngest, oldest) => youngest.minAge - oldest.minAge )

            setActivities(sortedAges);
        }
        fetchData();
    },[]);

// find ud af hvorfor den ikke virker med globals.css LØST! det var ''
    return (
<section className="min-h-screen p-6 bg-[#5E2E53] mb-20">
    <h1 className="mb-6 font-bold text-xl text-white">Aktiviteter</h1>
        <ActivityList activities={activities} />
</section>
    )
}
