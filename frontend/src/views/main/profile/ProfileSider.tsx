import defaultAvatar from "@/assets/img/default-avatar.jpg";
import { useAuth } from "@/HOCs/auth-provider";
import { User } from "@/models/user";
import { useServices } from "@/services";
import { EditOutlined } from "@ant-design/icons";
import { Avatar, Col, Input, Layout, Row, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { from, Subscription } from "rxjs";
import { ProfileForm } from "./ProfileForm";
import { ProfileInfo } from "./ProfileInfo";

const { Sider } = Layout;

export const ProfileSider: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<User | null>(null);
  const [editing, setEditing] = useState(false);
  const [editable, setEditable] = useState(false);
  const [updatingAvatar, setUpdatingAvatar] = useState(false);
  const { profileService } = useServices();
  const { user } = useAuth();
  const match = useRouteMatch<{ id: string }>();
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    getProfile(match.params.id);
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [match.params.id]);

  useEffect(() => {
    setEditable(profile?._id === user?._id);
  }, [profile?._id, user?._id]);

  const getProfile = (id: string) => {
    setLoading(true);
    subscriptions.push(
      from(profileService().getProfile(id)).subscribe(
        (profile: any) => {
          setProfile(profile);
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      )
    );
  };

  const onDone = (updatedProfile: User) => {
    setProfile(updatedProfile);
    setEditing(false);
  };

  const updateAvatar = (e: any) => {
    if (!e.target.files[0] || updatingAvatar) return;
    setUpdatingAvatar(true);
    subscriptions.push(
      from(profileService().updateAvatar(e.target.files[0])).subscribe(
        (updatedProfile: any) => {
          setProfile(updatedProfile);
          setUpdatingAvatar(false);
        },
        () => {
          setUpdatingAvatar(false);
        }
      )
    );
  };

  return (
    <Sider
      style={{
        background: "#fff",
        position: "fixed",
        padding: "0px 20px 50px",
      }}
      width={320}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        {profile ? (
          <React.Fragment>
            {!editing && editable && (
              <EditOutlined
                onClick={() => setEditing(true)}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: 0,
                  top: 20,
                  color: "#1890FF",
                }}
              />
            )}
            <Row>
              {updatingAvatar ? (
                <div style={{ margin: "20px auto" }}>
                  <Skeleton.Avatar active style={{ width: 150, height: 150 }} />
                </div>
              ) : (
                <Avatar
                  src={profile.avatar || defaultAvatar}
                  style={{ width: 150, height: 150, margin: "20px auto" }}
                />
              )}
            </Row>
            {editable && (
              <Row>
                <label
                  style={{
                    margin: "0 auto",
                    color: "#1890FF",
                    cursor: "pointer",
                  }}
                >
                  Change avatar
                  <Input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={updateAvatar}
                  />
                </label>
              </Row>
            )}
            {editing && editable ? (
              <ProfileForm
                profile={profile}
                onCancel={() => setEditing(false)}
                onDone={onDone}
              />
            ) : (
              <ProfileInfo profile={profile} />
            )}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Row>
              <div style={{ margin: "20px auto" }}>
                <Skeleton.Avatar active style={{ width: 150, height: 150 }} />
              </div>
            </Row>
            <Row>
              <Col span={24}>
                <Skeleton.Input active />
              </Col>
            </Row>
          </React.Fragment>
        )}
      </div>
    </Sider>
  );
};
