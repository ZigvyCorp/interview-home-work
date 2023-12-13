import dateFormat from 'dateformat';
import { useCallback } from 'react';
import { Card } from 'antd';

import useFetcher from '../hooks/useFetcher';
import Comment from './Comment';

const Blog = ({ content }) => {
    const { data } = useFetcher(
        `https://jsonplaceholder.typicode.com/users?id=1`
    );

    const randomDate = useCallback(() => {
        const date = new Date(
            new Date(2002, 0, 1).getTime() +
                Math.random() *
                    (new Date(2023, 0, 1).getTime() -
                        new Date(2002, 0, 1).getTime())
        ).toDateString();
        return dateFormat(date, 'mmmm dS, yyyy');
    }, []);
    const user = data?.[0];
    const date = randomDate();

    return (
        <Card className="mt-10">
            <h1 className="text-2xl text-center capitalize mb-4">
                {content.title}
            </h1>
            <p>
                <span className="font-bold">Author:</span> {user?.name}
            </p>
            <p>
                <span className="font-bold">Create at:</span> {date}
            </p>
            <p className="text-lg mt-4">{content.body}</p>
            <Comment postId={content.id} />
        </Card>
    );
};

export default Blog;
