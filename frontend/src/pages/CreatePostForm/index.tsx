import Header from "src/components/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Spinner from "react-bootstrap/Spinner";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPostStart, postSelector } from "src/store/reducers/post";
import { DEFAULT_USER_ID } from "./constants";
import { useSelector } from "react-redux";

export interface ICreatePostForm {
  title: string;
  content: string;
}

const CreatePostForm = () => {
  const { register, handleSubmit } = useForm<ICreatePostForm>();
  const navigate = useNavigate();
  const { isLoading } = useSelector(postSelector);
  const dispatch = useDispatch();

  function onSubmit(data: ICreatePostForm) {
    const newPost = {
      ...data,
      body: data.content,
      userId: DEFAULT_USER_ID,
    };
    dispatch(createPostStart(newPost));
    navigate("/posts");
  }

  return (
    <>
      <Header />
      <Stack className="align-items-center mt-4" gap={3}>
        <h2>Create new post</h2>
        <Form onSubmit={handleSubmit(onSubmit)} className="w-25">
          <Form.Group className="mb-3" controlId="createPostForm.title">
            <Form.Label>Post title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Post title"
              {...register("title")}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="createPostForm.content">
            <Form.Label>Post content</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="PostContent"
              {...register("content")}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={isLoading}
          >
            {isLoading && (
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            {isLoading ? " Creating..." : "Create"}
          </Button>
        </Form>
      </Stack>
    </>
  );
};

export default CreatePostForm;
