import React from 'react'
import {useSelector} from 'react-redux'

export default function AuthorBlog(props){
    const Users = useSelector((state) => state.users)

    const getNameUser = (id) => {
        let name = '';
        if(Users.data) {
            let item = Users.data.find(item => item.id === 1);
            name = item.name;
        }
        return name;
    }

    return(
        <div className="author-blog"><strong>Author:</strong> {getNameUser(props.id)}</div>
    )
}