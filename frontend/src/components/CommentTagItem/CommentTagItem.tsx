import { Typography } from 'antd';
import { memo } from 'react';

type Props = {
    content: string;
    color: string;
    backgroundColor: string;
};

const CommentTagItem = memo(function CommentTagItem({ content, color, backgroundColor }: Props) {
    return (
        <div
            style={{
                border: `1px solid ${color}`,
                borderRadius: '5px',
                backgroundColor: `${backgroundColor}`,
                cursor: 'default',
            }}
        >
            <Typography.Text strong style={{ padding: '12px', color: `${color}` }}>
                {content}
            </Typography.Text>
        </div>
    );
});

export default CommentTagItem;
