let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}


let object;
let request_user = new XMLHttpRequest(); // asynchronous request
request_user.open("GET", './data/users.json', true);
request_user.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        object = JSON.parse(this.response);
        //console.log(object);
        let item0 = object[1];
        let item1 = object[0];
        let item2 = object[1];
        let item3 = object[2];

        document.getElementById('name0').innerHTML = item0.name;
        document.getElementById('name1').innerHTML = item1.username;
        document.getElementById('name2').innerHTML = item2.username;
        document.getElementById('name3').innerHTML = item3.username;

        document.getElementById('name4').innerHTML = item3.username;
        document.getElementById('name5').innerHTML = item2.username;
        document.getElementById('name6').innerHTML = item1.username;
        document.getElementById('name7').innerHTML = item2.username;
        document.getElementById('name8').innerHTML = item2.username;
        document.getElementById('name9').innerHTML = item3.username;

    }
});


let request_post = new XMLHttpRequest(); // asynchronous request
request_post.open("GET", './data/posts.json', true);
request_post.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        object = JSON.parse(this.response);
        //console.log(object);
        
        let item1 = object[0];
        let item2 = object[1];
        let item3 = object[2];
        console.log(item2.tags[2])
        
        document.getElementById('title1').innerHTML = item1.title;
        document.getElementById('title-search1').innerHTML = item1.title;
        document.getElementById('title2').innerHTML = item2.title;
        document.getElementById('title-search2').innerHTML = item2.title;
        document.getElementById('title3').innerHTML = item3.title;
        document.getElementById('title-search3').innerHTML = item3.title;

        document.getElementById('body1').innerHTML = item1.content.substring(0,99);
        document.getElementById('body2').innerHTML = item2.content.substring(0,99);
        document.getElementById('body3').innerHTML = item3.content.substring(0,99);

        document.getElementById('create1').innerHTML = item1.created_at;
        document.getElementById('create2').innerHTML = item2.created_at;
        document.getElementById('create3').innerHTML = item3.created_at;

        document.getElementById('magenda1').innerHTML = item1.tags[0];
        document.getElementById('red1').innerHTML = item1.tags[1];
        document.getElementById('volcano1').innerHTML = item1.tags[2];

        document.getElementById('magenda2').innerHTML = item2.tags[0];
        document.getElementById('red2').innerHTML = item2.tags[1];
        document.getElementById('volcano2').innerHTML = item2.tags[2];

        document.getElementById('magenda3').innerHTML = item3.tags[0];
        document.getElementById('red3').innerHTML = item3.tags[1];
        document.getElementById('volcano3').innerHTML = item3.tags[2];
    }
});


let request_comment = new XMLHttpRequest(); // asynchronous request
request_comment.open("GET", './data/comments.json', true);
request_comment.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        object = JSON.parse(this.response);
        //console.log(object);

        let item1 = object[Math.floor(Math.random() * object.length)];
        let item2 = object[Math.floor(Math.random() * object.length)];
        let item3 = object[Math.floor(Math.random() * object.length)];
        let item4 = object[Math.floor(Math.random() * object.length)];
        let item5 = object[Math.floor(Math.random() * object.length)];
        let item6 = object[Math.floor(Math.random() * object.length)];

        document.getElementById('cmt1_1').innerHTML = item1.content;
        document.getElementById('cmt1_2').innerHTML = item2.content;
        document.getElementById('cmt2_1').innerHTML = item3.content;
        document.getElementById('cmt2_2').innerHTML = item4.content;
        document.getElementById('cmt3_1').innerHTML = item5.content;
        document.getElementById('cmt3_2').innerHTML = item6.content;
    }
});

request_user.send();
request_post.send();
request_comment.send();


function myFunction() {
    let input = document.getElementById("search-title");
    let filter = input.value.toUpperCase();
    let groupItem = document.getElementById("charactersList");
    let item = groupItem.getElementsByTagName("li");
    for (i = 0; i < item.length; i++) {
        a = item[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = "";
        } else {
            item[i].style.display = "none";
        }
    }
}