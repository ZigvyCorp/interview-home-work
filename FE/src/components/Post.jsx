/* eslint-disable react/prop-types */
import { Divider, Flex, Tag, Typography } from 'antd';
import { formattedCreatedAt } from '../utils/DateFormat';

const { Title, Paragraph, Text } = Typography;

const getRandomTagColor = () => {
  const colors = [
    'volcano',
    'magenta',
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

export const Post = ({ props }) => {
  return (
    <>
      <Divider style={{ margin: '0' }}>
        <Title>{props.title}</Title>
      </Divider>
      <Flex justify="space-between">
        <div style={{ marginBottom: '20px' }}>
          <Text strong style={{ fontSize: '14px' }}>
            Author: {props.owner.name}
          </Text>
          <br />
          <Text strong style={{ fontSize: '14px' }}>
            Create at: {formattedCreatedAt(props.created_at)}
          </Text>
        </div>
        <div>
          {props.tags.map((tag) => (
            <Tag key={tag} color={getRandomTagColor()}>
              {tag}
            </Tag>
          ))}
        </div>
      </Flex>
      <Paragraph>{props.content}</Paragraph>
    </>
  );
};
