
import { Row, Col, Tag, List, Avatar, Divider, Button } from 'antd';
import * as moment from 'moment';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];


function PostItem(props) {
  const { content, title, owener, createAt, comments, tags } = props;
  
  return (
    <div
      className="site-layout-background"
      style={{
        marginTop: 25,
        padding: 24,
      }}
    >
      <div style={{ position: "relative" }}>
        {/* <div style={{ position: "absolute", right: "0px" }}><Button type="primary" danger>Show Detail</Button></div> */}
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <Row>
          <Col span={12}>
            <div>Author: {owener.name}</div>
            <div>Created at: {moment(createAt).format("DD MMM YYYY hh:mm a")}</div>
          </Col>
          <Col style={{ textAlign: "right" }} span={12}>
            {tags.map(tag => <Tag>{tag}</Tag>)}
          </Col>
        </Row>

        <div style={{ marginTop: 25 }}>
          {content.substring(0, 101)}
        </div>
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={item.owener.name}
                description={item.content}
              />
            </List.Item>
          )}
        />
        <Button size="small" type="text">Show all comments</Button>
      </div>
    </div>
  );
}

export default PostItem;
