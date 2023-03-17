import { useEffect, useState } from "react"
import { Card } from "../components/Card"

export const List = () => {
  const [list, setList] = useState([])
  const [status, setStatus] = useState("loading")
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/photos?_limit=10"
        )
        const json = await res.json()
        setList(json)
      } catch (error) {
        setStatus("error")
      }
    }
    getCountries()
  }, [])

  return (
    <div className="list">
      {status === "error" && <h1>Error</h1>}
      {status === "Loading" && <h1>Loading...</h1>}
      {list.map((country) => (
        <Card
          title={country.title}
          src={country.url}
          albumId={country.albumId}
          key={country.id}
        />
      ))}
    </div>
  )
}
