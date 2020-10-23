import { useServices } from "@/services";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Dropdown, Menu, notification } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { from, Subscription } from "rxjs";

const PostMenu = (props: any) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { postService } = useServices();
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, []);

  const handleOk = () => {
    setDeleting(true);
    subscriptions.push(
      from(postService().deletePost(props.post._id)).subscribe(
        () => {
          setDeleting(false);
          setShowDeleteModal(false);
          props.onDelete?.call();
          notification.success({
            message: "Deleted",
            description: "Post deleted successfully!",
            duration: 2,
          });
        },
        () => {
          setDeleting(false);
        }
      )
    );
  };

  const handleCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <React.Fragment>
      <Modal
        title="Confirm delete post"
        visible={showDeleteModal}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes, sure!"
        okButtonProps={{
          danger: true,
          disabled: deleting,
        }}
        cancelButtonProps={{
          disabled: deleting,
        }}
        maskClosable={false}
      >
        <p>Are you sure want to delete this post?</p>
      </Modal>
      <Menu>
        <Menu.Item key="edit" icon={<EditOutlined />}>
          <Link to={`/blogs/${props.post._id}/edit`}>Edit</Link>
        </Menu.Item>
        <Menu.Item
          key="delete"
          icon={<DeleteOutlined />}
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export const PostMenuDropdowm = (props: any) => {
  return (
    <Dropdown
      overlay={<PostMenu post={props.post} onDelete={props.onDelete} />}
      placement="bottomRight"
      trigger={["click"]}
    >
      <EllipsisOutlined style={{ cursor: "pointer" }} />
    </Dropdown>
  );
};
