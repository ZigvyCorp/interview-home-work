import React from "react";
import styles from "./header.module.css";
import { Avatar, Space } from "antd";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { clearPosts } from "../../redux/actions/postAction";
import { selectSearchPerformed } from "../../redux/reducers/postSlice";

const { Title } = Typography;

export default function Header() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const searchPerformed = useAppSelector(selectSearchPerformed);

	const handleGoHomePage = () => {
		if (searchPerformed) {
			dispatch(clearPosts());
		}
		navigate("/");
	};

	return (
		<div className={styles.container}>
			<div className={styles["logo-container"]}>
				<img onClick={handleGoHomePage} src="./logo192.png" className={styles.logo} alt="logo" />
			</div>
			<Title onClick={handleGoHomePage} level={3} className={styles.title}>
				Blogs
			</Title>
			<Space className={styles.user} align="center" direction="horizontal" size={12}>
				<Avatar
					src="https://i.pinimg.com/564x/69/94/a7/6994a737b8546476d8550b967c87e02f.jpg"
					size={48}
				/>
				Hong Jun Na
			</Space>
		</div>
	);
}
