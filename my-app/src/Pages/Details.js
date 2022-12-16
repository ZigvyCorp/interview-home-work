import React from 'react'
import { Layout, Descriptions, Typography,Button  } from 'antd';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Header, Content } = Layout;

const Details = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const { Title } = Typography;
  const { formatData } = useSelector(
    (state) => state.persistedReducer
  );

  const details = {
    ...formatData.filter (
      (value) => {return value.id === Number(id)}
    )[0]
  };

  return (
      <Layout>
        <Header>
          <Navbar/>
        </Header>
        <Content>
          <br />
          <Button type="primary" onClick={() => {navigate ("/")}}>Go back</Button>
          <br />
          <br />
          <Descriptions title="Author Info">
            <Descriptions.Item label="Name">{details.user.name}</Descriptions.Item>
            <Descriptions.Item label="Phone">{details.user.phone}</Descriptions.Item>
            <Descriptions.Item label="UserName">{details.user.username}</Descriptions.Item>
            <Descriptions.Item label="Email">{details.user.email}</Descriptions.Item>
            <Descriptions.Item label="Address">
              {details.user.address.suite}, {details.user.address.street}, {details.user.address.city}
            </Descriptions.Item>
            <Descriptions.Item label="City ZipCode">{details.user.address.zipcode}</Descriptions.Item>
            <Descriptions.Item label="Company Name">{details.user.company.name}</Descriptions.Item>
            <Descriptions.Item label="Company Catch Phrase">{details.user.company.catchPhrase}</Descriptions.Item>
          </Descriptions>
          <br />
          <br />
          <br />
          <Descriptions title="Posts Info">
            <Descriptions.Item label="Post Title">{details.title}</Descriptions.Item>
            <Descriptions.Item label="Post Description">{details.body}</Descriptions.Item>
            <Descriptions.Item label="Created Day">{details.day}</Descriptions.Item>
          </Descriptions>
          <br />
          <br />
          <br />
          <Title level={5}>Comment Info</Title>
            {
              details.comment.map((item) => {
                return (<div key={item.id}>
                  <Descriptions title={`ID: ${item.id}`} bordered>
                    <Descriptions.Item label="User Name">{item.name}</Descriptions.Item>
                    <Descriptions.Item label="User Email">{item.name}</Descriptions.Item>
                    <Descriptions.Item label="Comment">{item.body}</Descriptions.Item>
                  </Descriptions>
                  <br />
                </div>)
              })
            }
        </Content>
      </Layout>    
  )
}

export default Details