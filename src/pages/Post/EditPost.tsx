import Button from "react-bootstrap/Button"
import React from "react"
import { useGetPostByIdQuery } from "../../features/post/postApiSlice"
import { EditDto } from "./postInterface"

type Props = {
  id: number
  setIsEdit: React.Dispatch<React.SetStateAction<EditDto>>
}
const EditPost = ({ id, setIsEdit }: Props) => {
  return (
    <div className="me-2">
      <Button
        variant="outline-warning"
        onClick={() => setIsEdit({ id, isEdit: true })}
      >
        Edit Post
      </Button>
    </div>
  )
}

export default EditPost
