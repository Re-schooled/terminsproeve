"use server"
import { serverFetch } from "@lib/server-fetch";
import { cookies } from "next/headers";

export async function getUserCalendar() {
    const cookieStore = await cookies();
    const token = cookieStore.get("termin_token")?.value
    const userId = cookieStore.get("termin_bruger_uid")?.value    

    return await serverFetch(`http://localhost:4000/api/v1/users/${userId}`, "GET", token)
}

export async function getInstructorCalendar() {
    const cookieStore = cookies()
    const token = cookieStore.get("termin_token")?.value
    const userId = cookieStore.get("termin_bruger_uid")?.value

    const allActivities = await serverFetch(`http://localhost:4000/api/v1/activities`, "GET", token)

    return allActivities.filter(activity => activity.instructorId.toString() === userId)
}