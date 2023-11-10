import axios from "axios";

export async function getPosts() {
    console.log("getPosts API");
    return await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}

export async function getComments() {
    console.log("getComments API");
    return await axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
}