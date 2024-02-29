import Logo from "../assets/images/favicon-32x32.png";
import { Layout, Typography, Image, Row, Col, Avatar, Input } from "antd";
import { AppContainer } from "./AppContainer";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { postConstants } from "../constants";

const { Header } = Layout;

export const AppHeader = () => {
	const dispatch = useDispatch();
	const { keyword } = useSelector((state) => state.post);
	const onSearch = (value, _event) => {
		scrollTo({ top: 0, behavior: "smooth" });
		dispatch({ type: postConstants.SET_KEYWORD, payload: value });
	};

	return (
		<Header className="px-6 shadow fixed top-0 left-0 right-0 z-20">
			<AppContainer>
				<Row className="h-full">
					<Col span={5} className="flex gap-4 items-center">
						<Link to="/" className="inline-flex">
							<Image sizes={32} preview={false} src={Logo} />
						</Link>

						<Input.Search
							placeholder="Search..."
							defaultValue={keyword}
							onSearch={onSearch}></Input.Search>
					</Col>
					<Col span={14} className="flex items-center justify-around">
						<Typography.Title level={3} className="!mb-0 !font-medium">
							Blogs
						</Typography.Title>
					</Col>
					<Col span={5} className="flex items-center justify-end">
						<div>
							<Avatar size={32} icon={<UserOutlined />} />
							<Typography.Text className="ml-2">Adam Levine</Typography.Text>
						</div>
					</Col>
				</Row>
			</AppContainer>
		</Header>
	);
};
