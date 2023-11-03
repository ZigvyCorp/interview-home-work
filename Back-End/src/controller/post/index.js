const { response } = require('express');
const fetchData = require('../../models/index.js');

const getPost = async (req, res) => {
    try {
        let postsData = await fetchData('https://jsonplaceholder.typicode.com/posts')
        let usersData = await fetchData('https://jsonplaceholder.typicode.com/users')
        let commentsData = await fetchData('https://jsonplaceholder.typicode.com/comments')

        const data = postsData.map(blog => {
            let author = usersData.find((user) => user.id === blog.userId);
            blog.author = author.name;
            blog.createdDate = '1/11/2023';
            blog.comments = commentsData.filter(
                (comment) => comment.postId === blog.id
            );
            blog.lengthComments = blog.comments.length;
            return blog;
        })
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
};

const detailPost = async (req, res) => {
    try {
        const { id } = req.params;
        let postsData = await fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let usersData = await fetchData('https://jsonplaceholder.typicode.com/users');
        let commentsData = await fetchData('https://jsonplaceholder.typicode.com/comments');

        let author = usersData.find((user) => user.id === postsData.userId);
        postsData.author = author.name;
        postsData.createdDate = '1/11/2023';
        postsData.comments = commentsData.filter(
            (comment) => comment.postId === postsData.id
        );
        postsData.lengthComments = postsData.comments.length;
        res.status(200).send(postsData);
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
}
const upPost = async (req, res) => {
    let { userId, title, body } = req.body;
    try {
        let newPost = { userId, title, body };
        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: { 'Content-type': 'application/json; charset=UTF-8', },
        })
            .then((response) => response.json())
            .then((json) => res.status(201).send(json));
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
}
const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        });
        res.send("Đã xóa bài đăng");
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
};

const sharePage = async (req, res) => {
    try {
        let postsData = await fetchData('https://jsonplaceholder.typicode.com/posts')
        let usersData = await fetchData('https://jsonplaceholder.typicode.com/users')
        let commentsData = await fetchData('https://jsonplaceholder.typicode.com/comments')

        const data = postsData.map(blog => {
            let author = usersData.find((user) => user.id === blog.userId);
            blog.author = author.name;
            blog.createdDate = '1/11/2023';
            blog.comments = commentsData.filter(
                (comment) => comment.postId === blog.id
            );
            blog.lengthComments = blog.comments.length;
            return blog;
        })

        let perPage = 10; // số lượng sản phẩm xuất hiện trên 1 page
        let page = req.params.page || 1;
        const indexEnd = page * perPage - 1;
        const indexStart = indexEnd - perPage + 1;

        const result = data.slice(indexStart, indexEnd);
        result[0].total = data.length;

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send("Lỗi FE " + error.message);
    }
};

module.exports = { getPost, detailPost, upPost, deletePost, sharePage };