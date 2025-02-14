# Projekt Dokumentation

## Introduktion

Jeg har arbejdet på mit projekt, og der har været en del udfordringer undervejs. Bl.a. har jeg ikke fået min **tilmeld/afmeld-knap** til at virke som ønsket den kan jeg har udkommenteret det kode jeg næste havde færdigt vedrørende den fil, jeg har lavet en placeholder fil istedet for desværre. Derudover er der et problem med **footeren**, der ikke altid loader korrekt, medmindre man refresher siden på aktivitetsoversigten.

Jeg har forsøgt at holde koden **DRY**, men pga. tidsmangel har jeg prioriteret andre aspekter af projektet. Generelt har det dog været en **god og lærerig opgave**, hvor jeg har fået en solid forståelse for **Next.js**. 

Jeg planlægger at fortsætte med projektet efter aflevering for at lave generelle forbedringer inden eksamen. Det har været en **sjov opgave**, og jeg har nydt processen.

## Interessante Dele af Projektet

### Kalender Funktionalitet

En af de mest interessante dele af projektet var **kalenderfunktionen mellem instruktør og bruger**. Det krævede en del logik, men med hjælp fra min klassekammerat **@Lucas Kragh**, lykkedes det til sidst.

### Brug af Materiale

Jeg har gjort stor brug af materialet fra **repetitionsforløbet med Brian**. Det har været mit **byggeskelet**, især pga. de gode form actions og brugen af **Zod**.

## Teknologier og Opsætning

Projektet er bygget med følgende stack:

```json
{
  "name": "terminsproeve",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.4.0",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "eslint": "^9",
    "eslint-config-next": "15.1.6",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"
  }
}
```

## Udfordringer og Løsninger

### Billedloading fra API

Jeg havde problemer med at loade billeder fra API'et, men jeg fandt en løsning ved at konfigurere **next.config.js** sådan her:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '4000',
            pathname: '/file-bucket/**',
          },
        ],
    },
};

export default nextConfig;
```

Se også **[Next.js dokumentationen](https://nextjs.org/docs/messages/next-image-unconfigured-host)** for flere detaljer.

### Authentication og Fetch Requests

Jeg har genbrugt kode fra **repetitionsforløbet**, specielt **login.js** og **server-fetch.js**, som hjalp mig med **auth** og **fetch-requests**.

Eksempel på **login.js**:

```javascript
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

    const validate = schema.safeParse({ username, password })
    if (!validate.success) {
        return { formData: { username, password }, errors: validate.error.format() }
    }

    try {
        const response = await fetch("http://localhost:4000/auth/token", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ username, password })
        })

        if (response.status === 400) {
            return { formData: { username, password }, error: "Forkert email eller password" }
        }

        const data = await response.json()
        const cookieStore = await cookies()
        cookieStore.set("termin_token", data.token, { maxAge: 60 * 60 * 24 })
        cookieStore.set("termin_bruger_uid", data.userId, { maxAge: 60 * 60 * 24 })
    } catch (error) {
        throw new Error(error)
    }
    redirect("/activities")
}
```

Brugen af **Postman** var også en stor hjælp til at debugge mine API-kald.

## Genbrug af Kode

Jeg har forsøgt at strukturere min kode for at genbruge så meget som muligt, bl.a. **ActivityList.jsx** og **ActivityCard.jsx**:

**ActivityCard.jsx**:

```javascript
import Image from "next/image"

export default function ActivityCard ({name, image, minAge, maxAge}) {
    return (
        <article className="overflow-hidden rounded-3xl rounded-br-none">
            <div className="relative w-full h-[30vh]">
                <Image
                src={image}
                alt={name}
                height={300}
                width={500}
                className="w-full h-auto object-center"
                />
                <div className="bg-[#E1A1E9] bg-opacity-80 w-full absolute bottom-0 p-3">
                <h2 className="font-bold text-md text-black">{name}</h2>
                <p className="text-sm text-black">{minAge}-{maxAge} år</p>
                </div>
            </div>
        </article>
    )
}
```

## Konklusion

Jeg har lært meget i dette projekt, især om **Next.js**, **Zod**, og **authentication**. 

- Jeg er blevet glad for **Next's indbyggede imports** som `useParams`, `Image` og `Link`.
- **Zod** var en udfordring i starten, men takket være **Brian's repetition** gav det mening.
- **Postman** hjalp meget i udviklingen af API-kald.
- **Tidsmangel** har gjort, at nogle optimeringer ikke blev lavet, men det vil jeg arbejde videre på efter aflevering.

Selvom jeg ikke nåede **valgfri opgaver**, er jeg tilfreds med det samlede resultat. Jeg kan se fejl og mangler, men det må løses i fremtiden eller til eksamen!

---

# Generelle Next.js links

## Next.js Dokumentation
[Next.js Dokumentation](https://nextjs.org/docs)

## App Router & "use client" i Next.js
[App Router & "use client"](https://nextjs.org/docs/getting-started/react-essentials#the-use-client-directive)

## Fetching Data i Next.js
[Fetching Data](https://nextjs.org/docs/app/building-your-application/data-fetching)

## Server Actions og API Calls i Next.js
[Server Actions & API Calls](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
