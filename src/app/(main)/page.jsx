'use client'

import Header from "@/components/Header"
import Link from "next/link"

export default function Home() {
    return (
      <section className="relative flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/splash.jpg')]">
         <Header />
        <div className="absolute bottom-10">
          <Link href={"/activities"}>
          <button className="bg-[#5E2E53] text-white text-lg rounded-lg px-20 py-3 shadow-md opacity-0 animate-fade-in"> 
            Kom i gang
          </button>
          </Link>
        </div>


      </section>
    )
  }
  