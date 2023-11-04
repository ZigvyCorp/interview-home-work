import Link from "next/link";
import Comments from "./Comments";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import getUserByPostId from "../../../app/actions/getAuthor";

const PostItem = ({ title, createAt, body, id }: any) => {
    const [author, setAuthor] = useState<string>('')
    const router = useRouter();

    useEffect(() => {
        let mounted = true;
        getUserByPostId(id)
            .then((user) => {
                if (user) {
                    if (mounted) {
                        setAuthor(user.name)
                    }
                } else {
                    console.log('User not found or an error occurred.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        return () => {
            mounted = false;
        };

    }, [router])
    
    return (
        <div className="border-bottom">
            <h3 className="text-center"><Link href={`post/${id}`}>{title}</Link></h3>
            <div className="d-flex justify-content-between">
                <div>
                    <p>Author: {author}</p>
                    <p>Create at: {createAt}</p>
                </div>
                <div>
                    <span className="border border-secondary border-success d-inline-block px-2 rounded">abc</span>
                </div>
            </div>
            <p>{body}</p>
            <Comments id={id} />
        </div>
    )
}

export default PostItem;