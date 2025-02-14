import LoginForm from "src/components/LoginForm";

export const metadata = {
    title: "Login",
    description: "Login som bruger eller instruktør"
}



export default async function Login() {
	return (
		<>
			<LoginForm />
		</>
	)
}