export async function serverFetch(url, method = "GET", token = null, body = null) {
	try {
		const headers = {
			"Content-Type": "application/json",
		}
		if (token) {
			headers["Authorization"] = `Bearer ${token}`
		}

		const options = {
			method,
			headers,
		}
		
		if (body) {
			options.body = JSON.stringify(body)
		}

		const response = await fetch(url, options)
		return await response.json()
	} catch (error) {
		throw new Error(error)
	}
}
