//Check validate when submit form register
export const confirmValidate = (post,validate) =>{
	let valid = true;
	// Check state validate
	Object.values(validate).forEach(val =>{
		val !== '' && (valid = false);
	});
	// Check state User
	if(post.title === ''){valid = false};
	if(post.content === ''){valid = false};
	if(post.tags === ''){valid=false};

	return valid;
}