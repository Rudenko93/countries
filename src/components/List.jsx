import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "../components/Card"

export const List = () => {
  const [list, setList] = useState([])
  const [status, setStatus] = useState("loading")
  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await axios(
          "https://jsonplaceholder.typicode.com/photos?_page=12"
        )
        const data = await res
        console.log(data)
        console.log(data.link)
        setList(data.data)
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
