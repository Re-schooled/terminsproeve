import Link from "next/link";
import ActivityCard from "../components/ActivityCard";

export default function ActivityList ({ activities }) {
    return (
        <div className="grid gap-4">
            {activities.length > 0 ? (
                activities.map((activity) => (
                    <Link key={activity.id} href={`/activities/${activity.id}`}>
                    <ActivityCard
                    key={activity.id}
                    name={activity.name}
                    image={activity.asset?.url}
                    minAge={activity.minAge}
                    maxAge={activity.maxAge}
                    weekday={activity.time}
                    time={activity.time}
                    maxParticipants={activity.maxParticipants}
                    users={activity.users}
                    />
                    </Link>
                ))
            ) : (
                <p>error ved loading</p>
            )}
        </div>
    )
}