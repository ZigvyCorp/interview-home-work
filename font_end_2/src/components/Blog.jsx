import dateFormat from 'dateformat';
import { useCallback } from 'react';
import { Card } from 'antd';

import useFetcher from '../hooks/useFetcher';
import capitalize from '../lib/capitalize';
import CommentSection from './CommentSection';

const Blog = ({ content }) => {
    const { data } = useFetcher(
        `https://jsonplaceholder.typicode.com/users?id=1`
    );

    const randomDate = useCallback(() => {
        return new Date(
            new Date(2020, 1, 1).getTime() +
                Math.random() *
                    (new Date(2023, 1, 1).getTime() -
                        new Date(2020, 1, 1).getTime())
        );
    }, []);
    const user = data?.[0];
    const date = randomDate();
    const dateFormated = dateFormat(date, 'mmmm dS, yyyy');

    return (
        <Card className="mt-10">
            <h1 className="text-2xl text-center capitalize mb-4">
                {content.title}
            </h1>
            <p>
                <span className="font-bold">Author:</span> {user?.name}
            </p>
            <p>
                <span className="font-bold">Create at:</span> {dateFormated}
            </p>
            <p className="text-lg mt-4">{capitalize(content.body)}</p>
            <CommentSection postId={content.id} postDate={date} />
        </Card>
    );
};

export default Blog;
