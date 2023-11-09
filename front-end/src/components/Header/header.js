import React from "react"
import { Link } from "react-router-dom"

import { PictureOutlined, UserOutlined } from "@ant-design/icons"

const Header = () => {
  return (
    <nav className="flex items-center p-5 shadow-lg shadow-indigo-500/50">
      <div className="flex-auto text-center justify-center flex items-center">
        <PictureOutlined style={{ fontSize: "24px", marginRight: "12px" }} />
        <Link
          className="items-center hover:bg-slate-400 hover:text-white p-2 rounded-lg"
          to="/"
        >
          Logo
        </Link>
      </div>
      <div className="flex-auto  text-center ">
        <Link
          className="hover:bg-slate-400 hover:text-white p-2 rounded-lg"
          to="/posts"
        >
          Blogs
        </Link>
      </div>
      <div className="flex-auto text-center flex items-center justify-center">
        <UserOutlined style={{ fontSize: "24px", marginRight: "12px" }} />
        <Link
          to="/user"
          className="hover:bg-slate-400 hover:text-white p-2 rounded-lg"
        >
          Adam
        </Link>
      </div>
    </nav>
  )
}

export default Header
