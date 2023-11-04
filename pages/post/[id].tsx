import { useEffect, useState } from "react"
import getPostDetail from "../../app/actions/getPostDetail"
import getUserByPostId from "../../app/actions/getAuthor"
import { useRouter } from 'next/router'

type PostDetail = {
    title: string,
    body: string,
    id: number,
    userId: number,
}
export default function PostDetail() {
    const [data, setData] = useState<PostDetail>({
        title: "",
        body: "",
        id: 0,
        userId: 0,
    })
    const [author, setAuthor] = useState<string>('')
    const router = useRouter()


    useEffect(() => {
        let mounted = true;
        if (router.query.id) {
            const id = parseInt(router.query.id.toString());
            getPostDetail(id)
                .then((items: any) => {
                    if (mounted) {
                        setData(items.data)
                    }
                })

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
        }

        return () => {
            mounted = false;
        };

    }, [router])
    return (
        <div className="container">
            <h2>{data.title}</h2>
            <p>Author: {author}</p>
            <p>{data.body}</p>
        </div>
    )
}