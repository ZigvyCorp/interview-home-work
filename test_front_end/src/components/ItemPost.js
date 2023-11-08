import { useEffect, useState } from "react";
import ColorCard from "./ColorCard";
import { getUserByID } from "../services/AppService";
import { getPostCommentsByID } from "../services/AppService";
import ItemComment from "./ItemComment";

export default function Post({ item }) {
    const [user, setUser] = useState({});
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

    const initData = async () => {
        const userData = await getUserByID(item.userId);
        setUser(userData);

        const commentData = await getPostCommentsByID(item.id);
        setComments(commentData);
        console.log("Post's comments:", commentData);
    }

    useEffect(() => {
        initData();
    }, [])

    return (
        <div>
            <div className="mb-4">
                <h2 className="text-center">{item ? item.title : 'Temp title'}</h2>
                <div className={"d-inline-flex w-100"}>
                    <div className="w-75">
                        <p>Author: {user.name}</p>
                        <p>Created at: Sept. 8, 2023</p>
                    </div>
                    <div className={"flex-wrap w-25"}>
                        <ColorCard title={'magenta'} color={'text-magenta'} />
                        <ColorCard title={'red'} color={'text-red'} />
                        <ColorCard title={'volcano'} color={'text-volcano'} />
                        <ColorCard title={'orange'} color={'text-orange'} />
                        <ColorCard title={'gold'} color={'text-gold'} />
                        <ColorCard title={'lime'} color={'text-lime'} />
                        <ColorCard title={'green'} color={'text-green'} />
                        <ColorCard title={'cyan'} color={'text-cyan'} />
                        <ColorCard title={'blue'} color={'text-blue'} />
                        <ColorCard title={'geekblue'} color={'text-geekblue'} />
                        <ColorCard title={'purple'} color={'text-purple'} />
                    </div>
                </div>
                <p>{item ? item.body.substring(0, 100) : "temp body"}</p>
            </div>
            <div className="mx-4">
                <p>Number replies</p>
                <hr className={" text-center m-auto"} />
                {showComments ?
                    comments.map(itemComment => {
                        return <ItemComment item={itemComment} />
                    })
                    : <></>
                }
                
            </div>
            <div className="py-1 bg-dark"/>
        </div>
    )
}