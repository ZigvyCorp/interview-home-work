import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import { useCallback, useState } from "react";
import { createPost, hideModal } from "../../redux/actions";

function AddPost() {
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const [data, setData] = useState({
    title: "",
    content: "",
    owner: "654cb8e748ea6f1c64080b81",
    tags: [],
  });
  const [tag, setTag] = useState("");
  const handleAddTag = () => {
    if (tag !== "") {
      setData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, tag],
      }));
    }
    setTag("");
    dispatch(hideModal());
  };
  const handleHideModal = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);
  const onSubmit = useCallback(() => {
    dispatch(createPost.createPostRequest(data));
  }, [data, dispatch]);
  return (
    <Modal
      show={isShow}
      onHide={handleHideModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form controlId="floatingTextarea2" label="Content">
          <Form.Control
            type="title"
            placeholder="Post Title "
            autoFocus
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
          <ul className="h-auto flex flex-wrap ">
            {data.tags.length > 0 &&
              data.tags.map((item, index) => (
                <li
                  className="bg-blue-700 h-6 m-3 px-2 text-justify text-white text-sm rounded-md"
                  key={index}
                >
                  {item}
                </li>
              ))}
          </ul>
          <div className="flex items-center">
            <Form.Control
              type="text"
              title="Tags"
              placeholder="tags"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <Button
              variant="primary"
              className="h-[40px]"
              onClick={handleAddTag}
            >
              +
            </Button>
          </div>
          <Form.Control
            as="textarea"
            placeholder="This a content"
            style={{ height: "100px", marginTop: "20px" }}
            value={data.content}
            onChange={(e) => setData({ ...data, content: e.target.value })}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleHideModal}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddPost;
