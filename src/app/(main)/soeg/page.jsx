"use client"
import { getActivities } from "@/actions/activites"
import { useEffect, useState } from "react"
import ActivityList from "@/components/ActivityList";
import SearchBar from "@/components/SearchBar";

export default function SearchPage() {
    const [activities, setActivities] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        async function fetchData() {
            const data = await getActivities();

            const sortedAges = data.sort((youngest, oldest) => youngest.minAge - oldest.minAge )

            setActivities(sortedAges);
        }
        fetchData();
    },[]);

    const filteredActivities = activities.filter(activity => 
        activity.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

// find ud af hvorfor den ikke virker med globals.css LØST! det var ''
    return (
<section className="min-h-screen p-6 bg-[#5E2E53] mb-20">
    <h1 className="mb-6 font-bold text-xl text-white">Søg</h1>
        <SearchBar onSearch={setSearchTerm} />
        <ActivityList activities={activities && filteredActivities} />
</section>
    )
}
