import { Collapse, CollapseProps, Divider } from 'antd';
import { IComment } from '../../interfaces';
import CommentItem from '../CommentItem';

const CommentSection = ({
  count = 0,
  comments,
  show = false,
}: {
  count?: number;
  comments: IComment[];
  show?: boolean;
}) => {
  const showLabel = count > 1 ? 'replies' : 'reply';
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: `${count} ${showLabel}`,
      children: comments?.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      )),
    },
  ];

  return (
    <>
      <Divider />
      <Collapse
        ghost
        defaultActiveKey={show ? '1' : undefined}
        collapsible={count < 1 ? 'disabled' : undefined}
        items={items}
      />
    </>
  );
};

export default CommentSection;
