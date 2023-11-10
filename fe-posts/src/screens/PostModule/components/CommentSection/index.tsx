import { Collapse, CollapseProps, List } from 'antd';
import { useDispatch } from 'react-redux';
import { IComments } from '../../../../interfaces';
import { ActionApp } from '../../../../stores/redux/app.action';
import CommentItem from './CommentItem';

type Props = {
  postId: string;
  comments: IComments;
};

const COLLAPSE_KEY = '1';

const CommentSection = (props: Props) => {
  const { postId, comments } = props;

  const label = `${comments.count} ${comments.count > 1 ? 'replies' : 'reply'}`;

  const dispatch = useDispatch();

  const handleOnChange = async (e: Array<string> | string) => {
    if (!e.includes(COLLAPSE_KEY)) return;

    dispatch(ActionApp.RequestGetCommentsByPostId({ postId }));
  };
  const items: CollapseProps['items'] = [
    {
      key: COLLAPSE_KEY,
      label,
      children: (
        <List
          dataSource={comments.list}
          renderItem={(item) => <CommentItem comment={item} />}
        />
      ),
    },
  ];
  return <Collapse ghost items={items} onChange={handleOnChange} />;
};

export default CommentSection;
