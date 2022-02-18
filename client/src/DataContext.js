import { useState, useEffect, createContext } from "react"

const DataConText = createContext()

function DataProvider({ children }) {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(postsList => setPosts(postsList))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(commentsList => setComments(commentsList))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(usersList => setUsers(usersList))
            .catch((err) => console.log(err))
    }, [])

    const value = {
        posts,
        comments,
        users
    }

    return (

        <DataConText.Provider value={value} >
            {children}
        </DataConText.Provider >
    )
}

export { DataConText, DataProvider }