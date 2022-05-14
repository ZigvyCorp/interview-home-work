
import { Row, Col, Tag, List, Avatar, Divider, Button } from 'antd';

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


function PostItem() {
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
        <h1 style={{ textAlign: "center" }}>Post Title 1</h1>
        <Row>
          <Col span={12}>
            <div>Author: John Smith</div>
            <div>Created at: Sep 20, 2018</div>
          </Col>
          <Col style={{ textAlign: "right" }} span={12}>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
          </Col>
        </Row>

        <div style={{ marginTop: 25 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <Divider />
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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
