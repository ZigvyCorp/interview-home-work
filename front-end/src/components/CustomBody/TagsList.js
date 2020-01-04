import React from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

import TagItem from './TagItem'

const TagsList = ({ tags }) => {
	const result = tags.map((item, index) => <TagItem key={index} item={item}/>)
	return <ButtonToolbar>{result}</ButtonToolbar>
}

export default TagsList