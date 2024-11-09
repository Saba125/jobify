import React from "react"
import { Outlet } from "react-router-dom"

const HomePage = () => {
  return (
    <div>
      <nav>HomeLayout</nav>
      <Outlet />
    </div>
  )
}

export default HomePage
