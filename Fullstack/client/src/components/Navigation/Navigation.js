import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { navigation } from 'utils/constants'
import { scrollUp } from "utils/helpers";

const Navigation = () => {
    return (
        <nav className="text-center py-2 text-sm font-semibold">
            {navigation.map((el) => {
                return <NavLink
                    className={({ isActive }) => isActive ? "mx-5 transition duration-500 ease-out hover:text-main text-main" : "mx-5 transition duration-500 ease-out hover:text-main"}
                    onClick={scrollUp}
                    key={el.title}
                    to={el.path}
                >
                    {el.title}
                </NavLink>
            })}
        </nav>
    )
}

export default memo(Navigation)