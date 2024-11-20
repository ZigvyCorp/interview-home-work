import { Avatar, List } from "antd";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import UserLogo from "~/assets/logo/user.png";
import styles from "./CommentList.module.scss";

const cx = classNames.bind(styles);
function CommentList(props) {
  const { comments } = props;

  return (
    <List
    style={{width:"100%"}}
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(item) => (
        <List.Item style={{ borderBottom: "none" }}>
          <List.Item.Meta
            avatar={
              <Avatar
                src={UserLogo}
              />
            }
            title={
              <span>
                {item.userInfo.name}{" "}
                <span>{formatDistanceToNow(new Date(item.created_at))} ago</span>
              </span>
            }
            description={
              <div>
                <p>{item.content}</p>
                <p className={cx("reply-to")}>Reply to</p>
              </div>
            }
          />
        </List.Item>
      )}
      split={false}
    />
  );
}

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default CommentList;
