import { useState } from "react"
import { HiMoon, HiOutlineMoon } from "react-icons/hi2"

export const ModeSwitcher = () => {
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
    <div onClick={toggleTheme} className="modeSwitcher">
      {theme === "light" ? <HiOutlineMoon size="14px" /> : <HiMoon />}
      <h3>Dark mod</h3>
    </div>
  )
}
