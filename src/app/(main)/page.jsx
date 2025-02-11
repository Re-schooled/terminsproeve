'use client'

import Header from "@/components/Header"

export default function Home() {
    return (
      <section className="relative flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat bg-center bg-[url('/images/splash.jpg')]">
         <Header />
        <div className="absolute bottom-10">
          <button className="bg-[#5E2E53] text-white text-lg rounded-lg px-20 py-3 shadow-md"> {/* lav animation til fade in tror jeg vil bruge, måske noget tailwind animation opacity opret link til videregående side. */}
            Kom i gang
          </button>
        </div>


      </section>
    )
  }
  