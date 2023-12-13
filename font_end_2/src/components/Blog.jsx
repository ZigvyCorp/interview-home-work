import dateFormat from 'dateformat';
import { useCallback } from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';

import useFetcher from '../hooks/useFetcher';
import capitalize from '../lib/capitalize';
import CommentSection from './CommentSection';

const { Title } = Typography;

const Blog = ({ content }) => {
    const { data } = useFetcher(
        `https://jsonplaceholder.typicode.com/users?id=${content.userId}`
    );

    const randomDate = useCallback(() => {
        return new Date(
            new Date(2010, 1, 1).getTime() +
                (content.id / 100) *
                    (new Date(2023, 1, 1).getTime() -
                        new Date(2010, 1, 1).getTime())
        );
        // eslint-disable-next-line
    }, []);
    const user = data?.[0];
    const date = randomDate();
    const dateFormated = dateFormat(date, 'mmmm dS, yyyy');

    return (
        <Card className="mt-10">
            <Link to={`blog/${content.id}`}>
                <Title className="text-center capitalize" level={4}>
                    {content.title}
                </Title>
                <p className="font-bold">
                    Author:
                    <span className="font-normal text-base"> {user?.name}</span>
                </p>
                <p className="font-bold">
                    Create at:
                    <span className="font-normal text-base">
                        {' '}
                        {dateFormated}
                    </span>
                </p>
                <p className="text-lg mt-4">
                    {capitalize(content.body) + '. . .'}
                </p>
            </Link>
            <CommentSection postId={content.id} postDate={date} />
        </Card>
    );
};

export default Blog;
