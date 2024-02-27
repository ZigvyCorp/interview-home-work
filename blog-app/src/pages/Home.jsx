import Header from "../components/Headers/Header"

import {  Layout, theme ,Space, Tag, Collapse} from 'antd';

import { Content } from "antd/es/layout/layout";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: '2 replies',
    children: <p>{text}</p>,
    showArrow: false,
    style:{
        borderBottom:'1px solid #3333',
        borderRadius:'unset',
        fontWeight:'500',
    
    },
    className:'text-secondary'
   
  },
];


export default function Home() {
    const {
        token: { colorBgContainer, borderRadiusLG  },
    } = theme.useToken();
    const onChange = (key) => {
        console.log(key);
    };
  return (
 
    <Layout>
            <Header/>
            <Content style={{ padding: '0 60px' }}>
           
                <div
                style={{
                    background: colorBgContainer,
                    minHeight: 280,
                    padding: 24,
                    margin:20,
                    borderRadius: borderRadiusLG,
                    
                }}
                >
                        
                        <div className="card" >
                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <div className="card-body__top d-flex justify-content-between align-items-center">
                                    <div className="d-flex flex-column">
                                        <strong>Author:</strong>
                                        <strong>Create at:</strong>
                                    </div>

                                    <div style={{  maxWidth:'30%' }}>
                                        <Space size={[0, 8]} wrap>
                                            <Tag color="magenta">magenta</Tag>
                                            <Tag color="red">red</Tag>
                                            <Tag color="volcano">volcano</Tag>
                                            <Tag color="orange">orange</Tag>
                                            <Tag color="gold">gold</Tag>
                                            <Tag color="lime">lime</Tag>
                                            <Tag color="green">green</Tag>
                                            <Tag color="cyan">cyan</Tag>
                                            <Tag color="blue">blue</Tag>
                                            <Tag color="geekblue">geekblue</Tag>
                                            <Tag color="purple">purple</Tag>
                                        </Space>
                                    </div>



                                </div>
                                <div className="card-body__content mt-4" >
                                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                </div>
                                <div className="card-body__comment mt-4" >
    
                                    <Collapse  onChange={onChange} colorTextDisabled ghost  items={items} />
                                </div>

                                
                            </div>
                        </div>   
                </div>
            </Content>
      
    </Layout>
   
  )
}
