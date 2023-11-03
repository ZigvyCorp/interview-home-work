import { Flex, Typography } from 'antd';
import { memo } from 'react';
import { AVATAR } from '../../constants/constants';
import { Comment } from '../../models/comment';

type Props = {
    commentItem: Comment;
};

const CommentItem = memo(function CommentItem({ commentItem }: Props) {
    const { body, createdDate, userDetail } = commentItem;

    return (
        <Flex vertical={false} gap={20}>
            <div
                style={{
                    width: '4rem',
                    height: '4rem',
                    borderRadius: '50%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${AVATAR})`,
                }}
            ></div>
            <Flex flex={1} vertical>
                <Flex gap={10} align='center'>
                    <Typography.Text strong style={{ color: '#a5a5a5', fontSize: '16px' }}>
                        {userDetail.name}
                    </Typography.Text>
                    <Typography.Text style={{ color: '#a5a5a5', fontSize: '16px' }}>
                        {createdDate}
                    </Typography.Text>
                </Flex>
                <Typography.Text style={{ fontSize: '16px', padding: '20px 0' }}>
                    {body}
                </Typography.Text>
                <Typography.Text
                    style={{ color: '#a5a5a5', fontSize: '16px', paddingBottom: '20px' }}
                >
                    Reply to
                </Typography.Text>
            </Flex>
        </Flex>
    );
});

export default CommentItem;
