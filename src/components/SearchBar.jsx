"use client"
import { useState } from "react";
import { FaSearch, faSearch } from "react-icons/fa"

export default function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearch(SearchEvent) {
        setSearchTerm(SearchEvent.target.value)
        onSearch(SearchEvent.target.value)

    }
    
    return (
        <div className="relative w-full mb-8">
        <input type="text" placeholder="" className="w-full text-black opacity-20 p-3 relative" onChange={handleSearch} value={searchTerm}/>
        <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 opacity-65 text-[var(--color-light-gray)]"/>
        </div>
    )



}