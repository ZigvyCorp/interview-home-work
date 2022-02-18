import { useState, useRef } from 'react'
import PropTypes from 'prop-types'

SearchFilter.propTypes = {
    onSubmit: PropTypes.func
}

SearchFilter.defaultProps = {
    onSubmit: null
}

function SearchFilter(props) {
    const { onSubmit } = props
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeoutRef = useRef(null)

    function handleSearch(e) {
        setSearchTerm(e.target.value)

        if (!onSubmit) return;

        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        typingTimeoutRef.current = setTimeout(() => {
            onSubmit(e.target.value)

        }, 500)
    }


    return (
        <form>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
            />
        </form>
    )
}

export default SearchFilter