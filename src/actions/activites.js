"use server"

import { serverFetch } from "@lib/server-fetch";
import { cookies } from "next/headers";



export async function getActivities() {
    return await serverFetch("http://localhost:4000/api/v1/activities")
}

export async function getActivity(id) {
    return await serverFetch(`http://localhost:4000/api/v1/activities/${id}`)
}

// export async function joinActivity(activityId) {
//         try {        
//         const cookieStore = await cookies()
//         const token = cookieStore.get("termin_token")?.value
//         const userId = cookieStore.get("termin_bruger_uid")?.value

//         if (!token || !userId) {
//             throw new Error("Bruger er ikke logget ind")
//         }

//         const response = await fetch(
//             `http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Authorization": `Bearer ${token}`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         )
        
//         if (!response.ok) {
//             const errorText = await response.text()
//             throw new Error(`Server Error: ${response.status} - ${errorText}`)
//         }
//         return response.json
//     } catch (error) {
//         throw new Error(error)
//     }
// }
    
//     export async function leaveActivity(activityId) {        
//         const cookieStore = await cookies()
//         const token = cookieStore.get("termin_token")?.value
//         const userId = cookieStore.get("termin_bruger_uid")?.value

//         if (!token || !userId) {
//             throw new Error("Bruger er ikke logget ind")
//         }

//         const response = await fetch(
//             `http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`,
//             {
//                 method: "DELETE",
//                 headers: {
//                     "Authorization": `Bearer ${token}`,
//                     "Content-Type": "application/json",
//                 },
//             }
//         )
        
//         if (!response.ok) {
//             throw new Error(`Server Error: ${response.status} - ${await response.text()}`)
//         }
//         const responseText = await response.text()
//         return responseText ? JSON.parse(responseText) : { success: true }
//     }