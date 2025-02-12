// import { cookies } from "next/headers"
// // import FaveButton from "./fave-button"

// export default async function Activities() {
// 	const cookieStore = await cookies()
// 	const token = cookieStore.get("termin_token")
// 	const uid = cookieStore.get("termin_bruger_uid")

//     // const res = await fetch("http://localhost:4000/api/v1/activities", {
//     //     headers: {
//     //         Authorization: Bearer {$termin_token?.value}
//     //     },
//     //     cache: "no-store"
//     // })

//     // if (!res.ok) {
//     //     return <p>Ikke hentet</p>
//     // }

//     // const activities = await res.json()

// 	return (
// 	<ul>
//         {activities.map()
//         }
//     </ul>
// 	)
// }