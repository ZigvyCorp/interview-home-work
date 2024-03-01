import Logo from "../assets/images/favicon-32x32.png";
import {
	Layout,
	Typography,
	Image,
	Row,
	Col,
	Avatar,
	Input,
	Button,
	Drawer,
	Space,
} from "antd";
import { AppContainer } from "./AppContainer";
import { Link } from "react-router-dom";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { postConstants } from "../constants";
import { useState } from "react";

const { Header } = Layout;

export const AppHeader = () => {
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);
	const { keyword } = useSelector((state) => state.post);
	const onSearch = (value, _event) => {
		scrollTo({ top: 0, behavior: "smooth" });
		dispatch({ type: postConstants.SET_KEYWORD, payload: value });
	};
	const openSearch = () => setOpen(true);
	const closeSearch = () => setOpen(false);

	return (
		<Header className="px-6 shadow w-screen fixed top-0 left-0 right-0 z-20">
			<Drawer
				className="!h-auto"
				title="Search"
				open={open}
				placement="top"
				onClose={closeSearch}
				extra={
					<Space>
						<Button onClick={closeSearch}>Cancel</Button>
						</Space>
				}>
				<Input.Search
					role="search"
					placeholder="Find blogs..."
					defaultValue={keyword}
					onSearch={onSearch}
				/>
			</Drawer>
			<AppContainer>
				<Row className="h-full">
					<Col span={5} className="flex gap-4 items-center">
						<Link to="/" className="inline-flex">
							<Image sizes={32} preview={false} src={Logo} />
						</Link>
						<Button
							type="link"
							className="block ml-2 lg:hidden text-base w-auto text-left border-none focus:outline-none transition-colors"
							onClick={openSearch}
							size="large"
							icon={<SearchOutlined />}
						/>
						<Input.Search
							role="search"
							rootClassName="hidden lg:block"
							placeholder="Find blogs..."
							defaultValue={keyword}
							onSearch={onSearch}
						/>
					</Col>
					<Col span={14} className="flex items-center justify-around">
						<Typography.Title level={3} className="!mb-0 !font-medium">
							Blogs
						</Typography.Title>
					</Col>
					<Col span={5} className="flex items-center justify-end">
						<div>
							<Avatar size={{ xs: 24, md: 32 }} icon={<UserOutlined />} />
							<Typography.Text className="ml-2 hidden lg:inline-block">
								Adam Levine
							</Typography.Text>
						</div>
					</Col>
				</Row>
			</AppContainer>
		</Header>
	);
};
