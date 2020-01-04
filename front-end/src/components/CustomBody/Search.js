import React from 'react'

const Search = ({ value, onChange }) => {
	const placeholder = ` search for title or tags...`

	return (
		<div className="input-group-lg mx-3">
			<input
			  type="text"
			  className="form-control"
			  placeholder={placeholder}
			  value={value}
			  onChange={onChange}
			/>
		</div>
	)
}

export default Search