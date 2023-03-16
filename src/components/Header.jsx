import { Outlet } from "react-router-dom"
import { ModeSwitcher } from "./ModeSwitcher"

export const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="container">
          <div className="header">
            <h2 className="title ">Where in the world?</h2>
            <ModeSwitcher />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}
