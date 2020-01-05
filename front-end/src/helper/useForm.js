import { useState } from 'react'

const useForm = (callback, validate) => {
	const [ values, setValues ] = useState({
		title: '',
		content: '',
		tags: '',
	})

	const [ errors, setErrors ] = useState({
		title: '',
		content: '',
		tags: '',
	})

	const handleBlur = (event) => {
		const { name, value } = event.target
		setErrors({
			...errors,
			[name]: validate(value, name)
		})
	}

	const handleChange = (event) => {
		const { name, value} = event.target
		setValues({
			...values,
			[name]: value,
		})
	}

	const handleFocus = (event) => {
		const { name } = event.target
		setErrors({
			...errors,
			[name]: '',
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		callback(values)
	}

	return {
		handleBlur,
		handleChange,
		handleFocus,
		handleSubmit,
		errors,
		values
	}
}

export default useForm