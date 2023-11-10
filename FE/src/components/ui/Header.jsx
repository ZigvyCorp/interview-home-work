import Search from "antd/es/transfer/search"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { searchPostThunk } from "../../store/postsSlice/slice"
import useDebounce from "../../lib/debouce"
const Header = () => {
    const [query, setQuery] = useState("")

    console.log(query)
    const dispatch = useDispatch()


    useDebounce(
        () => {
            dispatch(searchPostThunk(query))
        }, [dispatch, query], 800
    )
    return (

        <div className="container-lg header-container">
            <div className="header__logo ml-3"><img src="/logo.png" alt="" /></div>

            <div className="header__content ">
                <div className="header__links flex items-center">
                    <div className="pr-2">
                        <NavLink to="/">myBlog</NavLink>
                    </div>

                    <Search onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div className="header__account">
                    <p className="text-xl">
                        Hello, Zigvy
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Header
