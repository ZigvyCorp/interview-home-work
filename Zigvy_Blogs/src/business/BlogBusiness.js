import blogList from '../data/posts.json';
import commentList from '../data/comments.json'
import userList from '../data/users.json'


export default class LoginBusiness {
    constructor() {
    }

    getBlogData(success, failed) {
        try {
            var postList = [];
            blogList.forEach((blog) => {
                let blogOwnerIndex = userList.findIndex(user=>{return(user.id == blog.owner)});
                let blogData = {
                    id: blog.id,
                    owner: {
                        id: userList[blogOwnerIndex].id,
                        displayName: userList[blogOwnerIndex].name,
                    },
                    title: blog.title,
                    tags: blog.tags,
                    content:blog.content,
                    comments: []
                };
                
                commentList.forEach((comment) => {
                    if (comment.post == blog.id) {
                        blogData.comments.push(comment);
                    }
                });
                postList.push(blogData);
            })
            success(postList)
        } catch (err) {
            console.log('Get blog data failed :( ', err)
            failed('Failed to get blog data...');
        }
    }

}
