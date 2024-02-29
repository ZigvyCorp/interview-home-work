import { ConfigProvider, theme } from "antd";
import { useSelector } from "react-redux";

export const AntdProvider = ({ children }) => {
	const darkMode = useSelector((state) => state.app.darkMode);

	return (
		<ConfigProvider
			theme={{
				algorithm: darkMode ? theme.darkAlgorithm : theme.lightAlgorithm,
				components: {
					Card: {
						borderRadius: "0px",
						algorithm: true,
						
					},
					Layout: {
						headerBg: darkMode ? "#000" : "#fff",
						footerBg: darkMode ? "#000" : "#fff",
						algorithm: true,
					},
					Typography: {
						algorithm: true,
					},
					Button: {
						colorLink: darkMode ? "#fff" : "#000",
						algorithm: true,
					},
					Switch: {
						algorithm: true,
					},
					Descriptions: {
						itemPaddingBottom: "1px",
						algorithm: true,
					},
					Skeleton: {
						algorithm: true,
					},
				},
			}}>
			{children}
		</ConfigProvider>
	);
};
