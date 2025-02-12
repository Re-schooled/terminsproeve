"use client"

import Login from "@/actions/login"
import { useActionState, useEffect } from "react"
import Image from "next/image"

export default function LoginForm() {
	const [formState, formAction, isPending] = useActionState(Login, null)

	useEffect(function () {
		console.log("formState", formState)
	}, [formState])

	return (
		<div className="relative flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/splash.jpg')]">
			<Image src="/images/Rectangle.png" className="absolute" alt="Styling" width={800} height={600}/>
		<div className="relative z-10 w-full max-w-sm">
		<form action={formAction} noValidate className="flex flex-col space-y-6">
			<h2 className="text-5xl text-white">Log ind</h2>
			
			<div>
				<label className="block">
					<input
						defaultValue={formState?.formData?.username}
						type="text"
						name="username"
						className="border w-full p-2 rounded-md bg-white text-gray-500" 
						placeholder="brugernavn"
						/>

				</label>
				<span className="block text-red-600">{formState?.errors?.username?._errors[0]}</span>
			</div>
			<div>
				<label className="block">
					<input
						defaultValue={formState?.formData?.password}
						type="password"
						name="password"
						className="border w-full p-2 rounded-md bg-white text-gray-500" 
						placeholder="adgangskode"
						/>
				</label>
				<span className="block text-red-600">{formState?.errors?.password?._errors[0]}</span>
			</div>
			<span className="text-red-600">{formState?.error}</span>

			<button disabled={isPending} type="submit" className="p-2 bg-[#5E2E53] disabled:bg-gray-600 text-white rounded-xl text-sm">
				{isPending ? "Logger ind..." : "Log ind"}
			</button>
		</form>
		</div>
		</div>
	)
}