import { Outlet } from "react-router-dom"
import "./Header.css"

export const Header = () => {
  return (
    <div className="maiin">
      <div className="wrapper">
        <div className="header">
          <div className="header-container">
            <div className="title ">Where in the world?</div>
            <div className="modeSwitcher ">Dark mode</div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
