async function init() {
	try {
    	var res = await axios.get('http://localhost:3000/users/1/posts');
    	var resUser = await axios.get('http://localhost:3000/users')

	    mainRender(res.data)
	    userRender(resUser.data)

	    console.log(res.data);
	    console.log(resUser.data)
	} catch (error) {
	    console.log(error);
	}
}
init();

function mainRender(data) {
	var posts = data.posts;
	var content = posts.map(function(item, i) {
        return 	'<div class="title d-flex justify-content-center mt-5">' + 
        			'<h1>'+ item.title +'</h1>' + 
        		'</div>' + 
        		'<div class="infoPost mb-4">' + 
	        		'<div class="d-flex flex-column">' + 
		        		'<h3>Author: ' + data.username + '</h3>' + 
		        		'<h3>Created at: Sep 20,2018</h3>' +
	        		'</div>' + 
	        	'</div>' + 
	        	'<div class="contentPost mb-5">' + 
	        		'<h3>' + item.body + '</h3>' +
	        	'</div>' +
	        	'<div id="accordion">' +
	        		'<div id="headingOne">' +
	        			'<h5 class="mb-0">' +
	        				'<div type="button" data-toggle="collapse" data-target="#collapse'+i+'" aria-expanded="true" aria-controls="collapse'+i+'"> '
	        				+ item.comment.length + 
	        				' replies </div>' +
	        			'</h5>' +
	        		'</div>' +
	        		'<hr>' +
	        		commentRender(item.comment, i)
	        		
	        		
	        		
	        				
	});
	document.getElementsByClassName("content")[0].innerHTML = content.join('');
	document.getElementsByClassName("username")[0].textContent = data.username
}

function commentRender(arrayComment, i) {
	content = arrayComment.map(function (c) {
		return '<div id="collapse'+i+'" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">' +
	    			'<div class="row mb-3 ml-3">' + 
	    				'<div class="col-lg-1 col-md-2 d-flex justify-content-center">' +
	    					'<img src="https://i.pinimg.com/474x/b3/06/db/b306dbf904d602f48bf442d91a699f10.jpg" class="img-comment img-fluid rounded-circle" alt="Responsive image">' +
	    				'</div>' +
	    				'<div class="col-lg-11 col-md-10">' +
	    					'<div class="d-flex">' + 
	    						'<h5 class="font-weight-bold">' + 
	    							c.name +
	    						'</h5>' +
	    						'<h5 class="ml-3 text-secondary">a day ago</h5>' +
	    					'</div>' + 
	    					'<div>' +
	    						'<h5>' + c.body + '</h5>' +
	    					'</div>' +
	    					'<div class="mt-4">' + 
	    						'<h5 class="text-secondary">Reply to</h5>' +
	    					'</div>' +
	    				'</div>' +
	    			'</div>' +
	    		'</div>'
	})

	return content.join('');
}

function userRender(users) {
	var dropdownMenu = document.getElementsByClassName("dropdown-menu")[0];
	var content = users.map(function (user) {
		return '<a class="dropdown-item" data-id="'+user.id+'" href="#">' + 
					user.username +
				'</a>'
	})


	dropdownMenu.innerHTML = content.join('');
	dropdownMenu.addEventListener('click', onListClicked);

	async function onListClicked(event){
		var button = event.target;
		var i = parseInt(button.dataset.id);

		var res = await axios.get("http://localhost:3000/users/"+i+"/posts");
		mainRender(res.data)
    }

}



