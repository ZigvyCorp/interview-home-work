import { useEffect, useState } from "react";
import ColorCard from "./ColorCard";
import { getUserByID } from "../services/AppService";
import { getPostCommentsByID } from "../services/AppService";
import ItemComment from "./ItemComment";

export default function ItemPost({ item }) {
    const [user, setUser] = useState({});
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    const initData = async () => {
        const userData = item.userId;
        console.log('User data:', userData)
        setUser(userData);

        // Get all comments from postId
        const commentData = await getPostCommentsByID(item._id);
        setComments(commentData);
        console.log("Post's comments:", commentData);
    }

    useEffect(() => {
        initData();
    }, [])

    return (
        <div className="mb-3">
            <div className="mb-4 px-4">
                <h2 className="text-center">{item ? item.title : 'Temp title'}</h2>
                <div className={"d-inline-flex w-100"}>
                    <div className="w-75">
                        <p>Author: {user.name}</p>
                        <p>Created at: Sept. 8, 2023</p>
                    </div>
                    <div className={"flex-wrap w-25"}>
                        <ColorCard title={'magenta'} color={'magenta'} />
                        <ColorCard title={'red'} color={'red'} />
                        <ColorCard title={'volcano'} color={'volcano'} />
                        <ColorCard title={'orange'} color={'orange'} />
                        <ColorCard title={'gold'} color={'gold'} />
                        <ColorCard title={'lime'} color={'lime'} />
                        <ColorCard title={'green'} color={'green'} />
                        <ColorCard title={'cyan'} color={'cyan'} />
                        <ColorCard title={'blue'} color={'blue'} />
                        <ColorCard title={'geekblue'} color={'geekblue'} />
                        <ColorCard title={'purple'} color={'purple'} />
                    </div>
                </div>
                <p>{item ? item.body : "temp body"}</p>
                <div className="mx-4">
                    <button
                        className="btn btn-light"
                        onClick={() => setShowComments(!showComments)}>
                        {comments ? comments.length : 0} replies
                    </button>
                    <hr className={" text-center m-auto mb-5"} />
                    {showComments ?
                        comments.map(itemComment => {
                            return <ItemComment item={itemComment} />
                        })
                        : <></>
                    }

                </div>
            </div>

            <div className="py-1 bg-dark" />
        </div>
    )
}