import { Avatar, List, Button } from 'antd';
import capitalize from '../lib/capitalize';
import randomDay from '../lib/randomDay';

const CommentList = ({ comments, postDate }) => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={comments}
            renderItem={(item) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={
                            <Avatar
                                src={`https://xsgames.co/randomusers/assets/avatars/pixel/${Math.floor(
                                    Math.random() * 54
                                )}.jpg`}
                            />
                        }
                        title={
                            <>
                                {item.email}{' '}
                                <span className="opacity-50">
                                    {randomDay(postDate)}
                                </span>
                            </>
                        }
                        description={
                            <div className="flex flex-col">
                                {capitalize(item.body)}
                                <Button
                                    className="flex justify-start"
                                    type="link"
                                >
                                    Reply to
                                </Button>
                            </div>
                        }
                    />
                </List.Item>
            )}
        />
    );
};

export default CommentList;
