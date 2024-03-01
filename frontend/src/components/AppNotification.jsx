import { Space, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { appConstants } from "../constants";

const MESSAGES = {
	success: "Success",
	error: "Error",
	warning: "Warning",
	info: "Info",
};

export const AppNotification = () => {
	const [api, contextHolder] = notification.useNotification();
	const dispatch = useDispatch();
	const { notifications } = useSelector((state) => state.app);

	const openNotificationWithIcon = (notification) => {
		console.log("notification", notification);
		api[notification.type]({
			message: MESSAGES[notification.type],
			description: notification.description,
			duration: 3,
			onClose: () =>
				dispatch({
					type: appConstants.REMOVE_NOTIFICATION,
					payload: notification.id,
				}),
		});
	};

	return (
		<>
			{contextHolder}
			<Space direction="vertical">
				{notifications.forEach((notification) =>
					openNotificationWithIcon(notification)
				)}
			</Space>
		</>
	);
};
