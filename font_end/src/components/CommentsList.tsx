import { Avatar, List, Button } from 'antd';
import { faker } from '@faker-js/faker';
import { formatDistanceToNow, parseISO } from 'date-fns';

import { Comment } from '../features/comments/commentsSlice';
import { useAppSelector } from '../app/hooks';
import { selectUserById } from '../features/users/usersSlice';

const { Item } = List;

const CommentsList = ({ item }: { item: Comment }) => {
    const commentOwner = useAppSelector((state) =>
        selectUserById(state, item.owner)
    );

    return (
        <Item>
            <Item.Meta
                avatar={<Avatar src={faker.image.avatarGitHub()} />}
                title={
                    <div className=" text-black dark:text-neutral-200">
                        {commentOwner.username}
                        <span className="opacity-50 ml-1">
                            {formatDistanceToNow(parseISO(item.created_at))} ago
                        </span>
                    </div>
                }
                description={
                    <div className="flex flex-col dark:text-neutral-200">
                        {item.content}
                        <Button className="flex justify-start" type="link">
                            Reply to
                        </Button>
                    </div>
                }
            />
        </Item>
    );
};

export default CommentsList;
