import { notification } from "antd";

function openNotificationWithIcon(type, message, description) {
    notification[type]({
        message,
        description,
    });
}

export default openNotificationWithIcon;
