import { serverFetch } from "src/lib/server-fetch";

export default async function aktiviteter() {
    const data = await serverFetch("http://localhost:4000/api/v1/activities")


    return (
        <>
        <ul>
			{data.map(activities => <Activities key={activities.id} />)}
		</ul>
        </>
    )
}
