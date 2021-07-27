// document.addEventListener('DOMContentLoaded', async (ev) => {
//     const formArr = document.querySelectorAll('.form-submit')
	

//     function formSubmitHandler(event) {
// 		event.preventDefault()

// 		const fd = new FormData(this);
// 		for (var key of fd.values()) {
// 			console.log(key); 
// 		 }
// 		const xhr = new XMLHttpRequest()

// 		xhr.onreadystatechange = function () {
// 			if (xhr.readyState == 4 && xhr.status == 200) {
// 				console.log(JSON.parse(xhr.responseText))
// 				const data = JSON.parse(xhr.responseText)

// 				if (!data.error) {

// 					alert('Posted successfully!')
// 				}
// 				else {
// 					alert(data.message)
// 				}
// 			}
// 		}

// 		xhr.open(this.getAttribute('method'), this.getAttribute('action'), true) // current URL
		
// 		xhr.send(fd) // send as req.body to the router
// 	}

// 	if (formArr)
// 	formArr.forEach(form => form.addEventListener('submit', formSubmitHandler))

   
// })