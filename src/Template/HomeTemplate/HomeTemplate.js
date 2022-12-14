import { Avatar, Badge, Col, Layout, Row, Space, Input } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import "./HomeTemplate.css";
import logo from "../../assets/images/logo.png";

import { useDispatch } from "react-redux";
import { GET_ALL_POSTS_SAGA, GET_POSTS_SEARCH_ACTION, GET_POST_BY_USERID_SAGA } from "../../redux/types/PostType";
import { USERID } from "../../utils/settingSystem";

export default function HomeTemplate() {
	const { Search } = Input;
	const dispatch = useDispatch();
	const handleChange = (e) => {
		const { value } = e.target;
		if (value === "") {
			dispatch({ type: GET_POST_BY_USERID_SAGA, userID: USERID });
			dispatch({ type: GET_ALL_POSTS_SAGA });
		} else {
			dispatch({ type: GET_POSTS_SEARCH_ACTION, value });
		}
	};

	return (
		<div className="container mx-auto overflow-hidden">
			<div>
				<img style={{ height: 100, margin: "auto" }} src={logo} alt="logo" />
				<div className="flex justify-center">
					<Space size="large" style={{ fontSize: 30 }}>
						<FacebookOutlined className="hover:text-blue-700 hover:duration-200 hover:scale-150 cursor-pointer" />
						<InstagramOutlined className="hover:text-red-400 hover:duration-200 hover:scale-150 cursor-pointer" />
						<TwitterOutlined className="hover:text-blue-400 hover:duration-200 hover:scale-150 cursor-pointer" />
						<MailOutlined className="hover:text-red-500 hover:duration-200 hover:scale-150 cursor-pointer" />
					</Space>
				</div>
			</div>
			<Layout
				style={{
					background: "transparent",
					marginTop: 20,
				}}>
				<Header>
					<div className="header px-5">
						<Row>
							<Col span={7} className="flex items-center">
								<Search onChange={handleChange} size="large" placeholder="input search text" enterButton />
							</Col>
							<Col span={10} className="flex items-center justify-around">
								<NavLink
									to="/"
									className={({ isActive }) =>
										isActive ? "text-blue-500 font-semibold text-2xl" : "font-semibold text-2xl"
									}>
									Home
								</NavLink>
								<NavLink
									to="/myblog"
									className={({ isActive }) =>
										isActive ? "text-blue-500 font-semibold text-2xl" : "font-semibold text-2xl"
									}>
									My blog
								</NavLink>
							</Col>
							<Col span={7} style={{ textAlign: "left" }}>
								<div className="flex items-center cursor-pointer">
									<span className="avatar-item">
										<Badge count={1}>
											<Avatar size="large" shape="square" icon={<UserOutlined />} />
										</Badge>
									</span>
									<span className="ml-3 text-2xl">User#{USERID}</span>
								</div>
							</Col>
						</Row>
					</div>
				</Header>
				<Content
					style={{
						padding: "0 50px",
						height: "70vh",
						overflowY: "scroll",
					}}>
					<Outlet />
				</Content>
			</Layout>
			<Outlet />
		</div>
	);
}
