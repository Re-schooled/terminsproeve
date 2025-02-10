"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

export default async function Login(prevState, formData) {
	const username = formData.get("username")
	const password = formData.get("password")

	const schema = z.object({
		username: z.string().min(1, { message: "Du skal udfylde en email" }),
		password: z.string().min(1, { message: "Du skal udfylde et password" })
	})

	const validate = schema.safeParse({
		username,
		password
	})

	if (!validate.success) {
		return {
			formData: {
				username,
				password
			},
			errors: validate.error.format()
		}
	}

	try {
		const response = await fetch("http://localhost:4000/auth/token", {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify({
				username,
				password
			})
		})

		if (response.status === 400) { // Bad request
			return {
				formData: {
					username,
					password
				},
				error: "Forkert email eller password"
			}
		}

		const data = await response.json()
        console.log(data) // tjek terminal for userData ; det sker hver gang vi logger ind.

		const cookieStore = await cookies()
		cookieStore.set("termin_token", data.token, { maxAge: 60 * 60 * 24 })
		cookieStore.set("termin_bruger_uid", data.userId.id, { maxAge: 60 * 60 * 24 })
	} catch (error) {
		throw new Error(error)
	}
    redirect("/")
}


// Husk at tilføj Postman i dokumentation
// Markdown filen.