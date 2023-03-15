import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  const selectedTheme = localStorage.getItem("selected theme")

  const [theme, setTheme] = useState(selectedTheme)

  document.body.setAttribute("data-theme", theme)

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
      localStorage.setItem("selected theme", "dark")
    } else {
      localStorage.setItem("selected theme", "light")
      setTheme("light")
    }
  }

  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <div className="headerContent">
            <h1 className="title ">Where in the world?</h1>
            <div className="modeSwitcher" onClick={toggleTheme}>
              Dark mode
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
