import { useState } from "react"
import { HiMagnifyingGlass } from "react-icons/hi2"

export const Search = () => {
  const [search, setSearch] = useState("")
  return (
    <div className="input-container">
      <HiMagnifyingGlass />
      <input
        className="search"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}
