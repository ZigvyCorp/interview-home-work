import React from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/image/zigvy-logo.svg"
import { Button } from "react-bootstrap"
const CustomHeader = () => {
  let navgate = useNavigate()
  return (
    <div className="d-flex justify-content-between p-3 bg-black">
      <div
        className="logo"
        onClick={() => {
          navgate("/")
        }}
      >
        <img src={logo} alt="logozigvy" loading="lazy" width={120} />
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Button
            variant="dark"
            onClick={() => {
              navgate("/")
            }}
          >
            {" "}
            Home
          </Button>
        </li>
        <li className="nav-item">
          <Button
            className="mx-2"
            variant="dark"
            onClick={() => {
              navgate("/")
            }}
          >
            {" "}
            Contact
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default CustomHeader
