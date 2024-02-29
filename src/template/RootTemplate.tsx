import React from "react"
import { Outlet } from "react-router-dom"
import CustomHeader from "../components/Header/CustomHeader"
import CustomFooter from "../components/Footer/CustomFooter"

const RootTemplate = () => {
  return (
    <>
      <CustomHeader />
      <Outlet />
      <CustomFooter />
    </>
  )
}

export default RootTemplate
