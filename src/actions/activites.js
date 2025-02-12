"use server"

import { serverFetch } from "@lib/server-fetch";
import { cookies } from "next/headers";



export async function getActivities() {
    return await serverFetch("http://localhost:4000/api/v1/activities")
}

export async function getActivity(id) {
    return await serverFetch(`http://localhost:4000/api/v1/activities/${id}`)
}