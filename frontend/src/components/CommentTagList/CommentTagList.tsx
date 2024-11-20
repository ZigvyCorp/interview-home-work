import { COMMENT_TAGS } from '~/features/comments/constants/constants';
import CommentTagItem from '../CommentTagItem/CommentTagItem';

export default function CommentTagList() {
    return (
        <>
            {COMMENT_TAGS.map(({ content, color, bg }) => (
                <CommentTagItem
                    key={content}
                    content={content}
                    color={color}
                    backgroundColor={bg}
                />
            ))}
        </>
    );
}
