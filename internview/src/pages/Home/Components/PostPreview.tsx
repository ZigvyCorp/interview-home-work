import { Collapse, Divider, Flex, Layout, Space, Typography } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import { Post } from "../../../actions";
import { BaseType } from "antd/es/typography/Base";
import moment from "moment";
import postApi from "../../../axios/posts";
import { Comment } from "../../../Model/Comment";

const { Paragraph, Title, Text } = Typography;

const colorTag: BaseType[] | undefined = [
  "secondary",
  "success",
  "warning",
  "danger",
];

interface PostPreviewProps {
  post: Post;
}

const PostPreview: React.FC<PostPreviewProps> = (props) => {
  const [comments, setComments] = useState([]);
  const post = props.post;
  const text =
    "Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. On insensible possession oh particular attachment at excellence in. The books arose but miles happy she. It building contempt or interest children mistress of unlocked no. Offending she contained mrs led listening resembled. Delicate marianne absolute men dashwood landlord and offended. Suppose cottage between and way. Minuter him own clothes but observe country. Agreement far boy otherwise rapturous incommode favourite. Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade her minutes. Ready how but truth son new under. At ourselves direction believing do he departure. Celebrated her had sentiments understood are projection set. Possession ye no mr unaffected remarkably at. Wrote house in never fruit up. Pasture imagine my garrets an he. However distant she request behaved see nothing. Talking settled at pleased an of me brother weather. Admiration stimulated cultivated reasonable be projection possession of. Real no near room ye bred sake if some. Is arranging furnished knowledge agreeable so. Fanny as smile up small. It vulgar chatty simple months turned oh at change of. Astonished set expression solicitude way admiration. Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. Among going manor who did. Do ye is celebrated it sympathize considered. May ecstatic did surprise elegance the ignorant age. Own her miss cold last. It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution. Hence hopes noisy may china fully and. Am it regard stairs branch thirty length afford. Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. Ever man are put down his very. And marry may table him avoid. Hard sell it were into it upon. He forbade affixed parties of assured to me windows. Happiness him nor she disposing provision. Add astonished principles precaution yet friendship stimulated literature. State thing might stand one his plate. Offending or extremity therefore so difficult he on provision. Tended depart turned not are.  Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.";
  const truncatedText =
    post.content.length > 1000
      ? post.content.substring(0, 1000) + "..."
      : post.content;

  useEffect(() => {
    postApi.getCommentByPostId(post.id).then((response: any) => {
      setComments(response.data);
    });
  }, [props]);
  return (
    <>
      <Layout>
        <Header
          style={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title>{post.title}</Title>
        </Header>
        <Content
          style={{
            backgroundColor: "white",
          }}
        >
          <Space
            size="middle"
            direction="vertical"
            style={{
              width: "100%",
            }}
          >
            <Flex
              style={{
                width: "100%",
              }}
              justify={"space-between"}
              align={"center"}
            >
              <Space direction="vertical" size="small">
                <Text>Author: Thien Thach</Text>
                <Text>
                  Created at: {moment(post.created_at).format("MMM DD, YYYY")}
                </Text>
              </Space>
              <Space>
                {post.tags.map((tag: any, idx: number) => (
                  <Text
                    key={idx}
                    type={idx > 3 ? colorTag[idx - 4] : colorTag[idx]}
                    code
                  >
                    {tag}
                  </Text>
                ))}
              </Space>
            </Flex>
            <Paragraph>{truncatedText}</Paragraph>
            <Collapse
              ghost
              expandIcon={() => <></>}
              bordered
              items={[
                {
                  key: "1",
                  label: (
                    <>
                      <Text type="secondary">{comments.length} comments</Text>
                      <Divider></Divider>
                    </>
                  ),
                  children: (
                    <Space size={"middle"} direction="vertical">
                      {comments.map((comment: Comment, idx) => (
                        <div key={idx}>
                          <CommentCard comment={comment} />
                        </div>
                      ))}
                    </Space>
                  ),
                },
              ]}
            />
          </Space>
        </Content>
        <Footer
          style={{
            backgroundColor: "white",
          }}
        ></Footer>
      </Layout>
      <hr />
    </>
  );
};

export default PostPreview;
