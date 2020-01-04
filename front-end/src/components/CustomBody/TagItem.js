import React from 'react'
import Button from 'react-bootstrap/Button'

import { tagColors } from '../../data'

const TagItem = ({ item }) => {
	const index = Math.floor(Math.random() * 7)
	const color = `outline-${tagColors[index]}`

	return (
		<Button
		  className="m-1"
		  size="sm"
		  variant={color}
		>
		  {item}
		</Button>
	)
}

export default TagItem