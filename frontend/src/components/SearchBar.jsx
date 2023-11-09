import { useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { fetchPost } from '../redux/action'
export default function SearchBar() {
    const inputRef = useRef()
    const dispatch = useDispatch()

    const handleSearch = () => {
        const searchKey = inputRef.current.value
        dispatch(fetchPost(searchKey))
    }

    return (
        <div className="searchbar">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" ref={inputRef} />
                <button className="btn btn-outline-secondary" onClick={handleSearch}>
                    <FaSearch></FaSearch>
                </button>
            </div>
        </div>
    )
}
