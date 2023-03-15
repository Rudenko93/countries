import { Outlet } from "react-router-dom"
import { ModeSwitcher } from "./ModeSwitcher"

export const Header = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="header">
          <div className="headerContent">
            <h2 className="title ">Where in the world?</h2>
            <ModeSwitcher />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
