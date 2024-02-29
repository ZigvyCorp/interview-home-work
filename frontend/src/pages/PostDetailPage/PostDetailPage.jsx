import { Col, Row } from 'antd';
import PostDetail from '../../features/PostDetail/PostDetail';
import CommentList from '../../features/CommentDetail/Components/CommentList/CommentList';

export default function PostDetailPage() {


    return (
        <>
            <Row justify={"center"}   >
                <Col xs={24} sm={24} md={24} lg={20} xl={16} >
                    <PostDetail />
                    <CommentList />
                </Col>
            </Row >
        </>
    );
}