const validateForm = (value, name) => (	
	!value 
		? `${name} field can not be blank. Please type something`
		: ''
)

export default validateForm