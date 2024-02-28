import React from "react"
import { Button, message, Popconfirm } from "antd"
import { useDeletePostMutation } from "../../features/post/postApiSlice"
const DeletePost = ({ id }: { id: number }) => {
  const [open, setOpen] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [deletePost, { isLoading }] = useDeletePostMutation()
  const cancel = () => {
    setOpen(false)
  }

  const confirm = () => {
    message.success("Successfully Deleted")
  }
  const handleOk = async () => {
    await setConfirmLoading(true)

    const res = await deletePost(id.toString())
    if (res) {
      await setOpen(false)
      await setConfirmLoading(false)
      await confirm()
    }
  }
  return (
    <Popconfirm
      title="Delete the post"
      description="Are you sure to delete this post?"
      onConfirm={() => {
        handleOk()
        cancel()
      }}
      onCancel={() => cancel()}
      okText="Yes"
      cancelText="No"
      open={open}
      onOpenChange={() => setOpen(true)}
      okButtonProps={{ loading: confirmLoading }}
    >
      <Button danger size="large">
        Delete
      </Button>
    </Popconfirm>
  )
}

export default DeletePost
