import React from "react";
import { Typography, Row, Col, Tag, Collapse } from "antd";
import Link from "next/link";
import dayjs from "dayjs";
import users from "@/data/users";
import Comments from "./Comments";
import colorTag from "@/utils/colorTag";
const { Title, Paragraph } = Typography;

const { Panel } = Collapse;
class Post extends React.Component {
   state = {
      expand: false,
      counter: 0,
   };

   typoExpand = () => {
      this.setState({
         expand: true,
         counter: !this.state.expand
            ? this.state.counter + 0
            : this.state.counter + 1,
      });
   };

   typoClose = () => {
      this.setState({
         expand: false,
         counter: !this.state.expand
            ? this.state.counter + 0
            : this.state.counter + 1,
      });
   };

   render() {
      return (
         <article className="p-10 bg-white rounded-2xl border-[1px] border-blue-200 border-solid transition-all duration-300 ease-out hover-post">
            <Title
               level={2}
               className="text-center hover:underline transition-all duration-100 cursor-pointer"
            >
               <Link href={`/post/${this.props.post.id}`} passHref>
                  {<a className="!text-black">{this.props.post.title}</a>}
               </Link>
            </Title>

            <Row align="top">
               <Col span={18} className="text-lg ">
                  <div>
                     Author:{" "}
                     <span className="font-medium">
                        {
                           users.find(
                              (user) => user.id === this.props.post.owner
                           ).name
                        }
                     </span>
                  </div>
                  <div>
                     Created at:{" "}
                     <span className="font-medium">
                        {dayjs(this.props.post.created_at).format(
                           "MMM DD, YYYY"
                        )}
                     </span>
                  </div>
               </Col>
               <Col span={6}>
                  <Row gutter={[5, 10]}>
                     {this.props.post.tags.map((tag, i) => {
                        return (
                           <Col key={i}>
                              <Tag
                                 color={colorTag[i]}
                                 className="rounded-md cursor-pointer"
                              >
                                 {tag}
                              </Tag>
                           </Col>
                        );
                     })}
                  </Row>
               </Col>
            </Row>

            <div key={this.state.counter} className="mt-3">
               <Paragraph
                  ellipsis={{
                     rows: 3,
                     expandable: true,
                     onExpand: this.typoExpand,
                     symbol: "more",
                  }}
               >
                  {this.props.post.content}{" "}
                  {this.state.expand && (
                     <span
                        className="ant-typography-expand"
                        onClick={this.typoClose}
                     >
                        see less
                     </span>
                  )}
               </Paragraph>
            </div>
            <Collapse
               collapsible="header"
               defaultActiveKey={["0"]}
               // className="border-0"
            >
               <Panel header="2 replies" key="1">
                  <Comments />
               </Panel>
            </Collapse>
         </article>
      );
   }
}
export default Post;
