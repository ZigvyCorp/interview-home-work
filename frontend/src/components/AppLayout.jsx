import { SunOutlined, MoonFilled, ClearOutlined } from "@ant-design/icons";
import React from "react";
import { FloatButton, Layout } from "antd";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppHeader } from "./AppHeader";
import { appConstants } from "../constants";
import { AppNotification } from "./AppNotification";
const { Content, Footer } = Layout;

export const AppLayout = () => {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.app.darkMode);

	const reInitialize = () => dispatch({ type: appConstants.RE_INITIALIZE });
	const changeTheme = () => dispatch({ type: appConstants.TOGGLE_DARK_MODE });

	return (
		<>
			<Layout className="w-full">
				<AppNotification />
				<Layout className="transition-all min-h-screen">
					<AppHeader />
					<Content className="mt-16">
						<Outlet />
					</Content>
					<Footer className="text-center shadow">
						Zigvy Corp ©{new Date().getFullYear()} Interview Testing
					</Footer>
				</Layout>

				<FloatButton.Group>
					<FloatButton
						onClick={changeTheme}
						icon={
							darkMode ? (
								<MoonFilled />
							) : (
								<SunOutlined />
							)
						}
					/>
					<FloatButton onClick={reInitialize} icon={<ClearOutlined />} />
				</FloatButton.Group>
			</Layout>
		</>
	);
};
