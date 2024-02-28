import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { SubmitHandler, useForm } from "react-hook-form"
import * as Yup from "yup"
import {
  useGetAllPostQuery,
  useGetAllUserQuery,
  usePostPostsMutation,
} from "../../features/post/postApiSlice"
import "./index.css"
import { EditDto } from "./postInterface"
type Props = {
  isEdit: EditDto
  setIsEdit: React.Dispatch<React.SetStateAction<EditDto>>
}

type Inputs = {
  example: string
  exampleRequired: string
}
const AddPost = ({ isEdit, setIsEdit }: Props) => {
  const { dataEditPost, refetch } = useGetAllPostQuery(undefined, {
    selectFromResult: ({ data }) => ({
      dataEditPost: data?.filter(post => post.id == isEdit.id),
    }),
    skip: !isEdit.isEdit,
  })

  const { dataUsers } = useGetAllUserQuery(undefined, {
    selectFromResult: ({ data }) => ({
      dataUsers: data?.filter(user => user.id == isEdit.id),
    }),
  })

  const [postPosts, { isLoading, isSuccess: EditSuccess }] =
    usePostPostsMutation()

  const [show, setShow] = React.useState(false)
  const handleClose = () => {
    setShow(false)
    setIsEdit({ ...isEdit, isEdit: false })
  }
  const handleShow = () => setShow(true)

  React.useEffect(() => {
    if (isEdit.isEdit) {
      setValue("title", (dataEditPost && dataEditPost[0].title) as string)
      setValue("body", (dataEditPost && dataEditPost[0].body) as string)
      setValue("email", (dataUsers && dataUsers[0].email) as string)
      setValue("id", (isEdit && isEdit.id) as number)
      handleShow()
    } else {
      setValue("title", "")
      setValue("body", "")
      setValue("email", "")
      setValue("id", undefined)
    }
  }, [isEdit])
  React.useEffect(() => {
    if (EditSuccess) {
      refetch()
    }
  }, [EditSuccess])
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required"),
    title: Yup.string().required("This field is required"),
    body: Yup.string().required("This field is required"),
    id: Yup.number(),
  })
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      body: "",
      email: "",
      id: 0,
    },
    resolver: yupResolver(validationSchema),
  })
  const onSubmit: SubmitHandler<any> = data => postPosts(data)

  return (
    <div>
      <Button variant="info" className="text-light" onClick={handleShow}>
        Add Post
      </Button>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {isEdit.isEdit ? "Edit Post" : "Add Post Form"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}
              <div>
                <p className="mb-0">
                  <label htmlFor="email">Email</label>
                </p>
                <input
                  className="btn1"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>

              <div className="">
                <p className="mb-0">
                  <label htmlFor="title">Title</label>
                </p>
                <input
                  type="text"
                  id="title"
                  className="btn1  w-100"
                  {...register("title")}
                />
                {errors.title && (
                  <p className="text-danger">{errors.title.message}</p>
                )}
              </div>
              {/* include validation with required or other standard HTML validation rules */}

              <div>
                <p className="mb-0">
                  <label htmlFor="body">Content</label>
                </p>

                <textarea
                  id="body"
                  className="btn1 w-100"
                  {...register("body", { required: true })}
                  rows={4}
                  cols={50}
                />
                {errors.body && (
                  <p className="text-danger">{errors.body.message}</p>
                )}
                {/* errors will return when field validation fails  */}
              </div>

              <Button type="submit" variant="success">
                Submit
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  )
}

export default AddPost
