import { Modal } from "react-bootstrap";
import usePostDetail from "../hooks/usePostDetail";
import PostContent from "./PostContent";
import PostDetailComment from "./PostDetailComment";

type PostModalType = {
  show: boolean;
  handleClose: () => void;
  postId: string | undefined;
};
export default function PostModal({
  show,
  handleClose,
  postId,
}: PostModalType) {
  const postDetail = usePostDetail(postId);
  // console.log(postDetail);
  return (
    <Modal show={show} onHide={handleClose}>
      {postDetail && (
        <>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">
              {postDetail.post.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PostContent body={postDetail.post.body} />
            <PostDetailComment commentData={postDetail.comment}/>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
}
