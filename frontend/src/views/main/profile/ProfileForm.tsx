import { User } from "@/models/user";
import { useServices } from "@/services";
import { Button, Col, Form, Input, Modal, Row, Space } from "antd";
import React, { useEffect, useState } from "react";
import { from, Subscription } from "rxjs";

export const ProfileForm: React.FC<{
  onCancel?: () => void;
  onDone?: (profile: User) => void;
  profile?: User;
}> = (props) => {
  const [dirty, setDirty] = useState(false);
  const [updating, setUpdating] = useState(false);
  const { profileService } = useServices();
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, []);

  const cancel = () => {
    if (dirty) {
      return Modal.confirm({
        maskClosable: false,
        content:
          "You haven't save your changes, your data will be lost. Are you sure want to cancel?",
        okText: "Ok",
        okButtonProps: {
          danger: true,
        },
        onOk: props.onCancel,
      });
    }
    props.onCancel?.call(undefined);
  };

  const handleUpdate = (value: any) => {
    if (!props.profile?._id) return;
    setUpdating(true);
    subscriptions.push(
      from(
        profileService().updateProfile({
          ...value,
          _id: props.profile._id,
        })
      ).subscribe((updatedProfile: any) => {
        setUpdating(false);
        props.onDone?.call(undefined, updatedProfile);
      })
    );
  };

  return (
    <Form
      name="profile"
      layout="vertical"
      onFinish={handleUpdate}
      onValuesChange={() => setDirty(true)}
    >
      <Row>
        <Col span={24}>
          <Form.Item
            name="firstName"
            label="First name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
            initialValue={props.profile?.firstName}
          >
            <Input readOnly={updating} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="lastName"
            label="Last name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
            initialValue={props.profile?.lastName}
          >
            <Input readOnly={updating} />
          </Form.Item>
        </Col>
      </Row>
      <Space style={{ float: "right", marginTop: 20 }}>
        <Button type="default" onClick={cancel} disabled={updating}>
          Cancel
        </Button>
        <Button type="primary" htmlType="submit" disabled={updating}>
          Save
        </Button>
      </Space>
    </Form>
  );
};
