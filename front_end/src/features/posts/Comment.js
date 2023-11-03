import { Space, Avatar, Typography } from "antd";
import { useMemo } from "react";
import { FormatType, formatDate } from "../../utils/datetime/formatDate";
import { useSelector } from "../../app/store";
import { selectUsers } from "../../app/redux/users/usersSlice";

const { Text } = Typography;

export default function Comment({ comment }) {
  const { _id, owner, content, createdAt } = comment ?? {};

  const users = useSelector(selectUsers);

  const cmtOwner = useMemo(() => {
    return users?.find(u => u._id === owner);
  }, [users, owner]);

  const fmtCreatedAt = useMemo(() => {
    return formatDate(new Date(createdAt), FormatType.ago);
  }, [createdAt]);

  return (
    <Space key={_id} style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Avatar style={{ backgroundColor: 'lightblue' }}>
        {cmtOwner.name.slice(0, 1)}
      </Avatar>
      <Space direction="vertical">
        <Space>
          <Text>{cmtOwner.name}</Text>
          <Text style={{ color: '#999' }}>{fmtCreatedAt}</Text>
        </Space>
        <Text style={{ fontSize: '15px' }}>{content}</Text>
        <Text style={{ color: '#999', cursor: 'pointer' }}>Reply to</Text>
      </Space>
    </Space>
  )
}
