import { Input, Layout, Menu } from "antd"
import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { setKeywordAction } from "../../redux/post/post.action"
import "./header.scss"

interface IMainHeaderProps {}

const MainHeader = (props: IMainHeaderProps) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleChangeMenu = () => navigate("/")

	const handleSearchPosts = (value: string) => {
		dispatch(setKeywordAction(value))
	}

	return (
		<Layout.Header className='header'>
			<Menu theme='light' mode='horizontal' defaultSelectedKeys={["1"]} style={{ lineHeight: "64px" }}>
				<Menu.Item key='1' onClick={handleChangeMenu}>
					Posts
				</Menu.Item>
			</Menu>
			<Input.Search placeholder='search title' onSearch={handleSearchPosts} style={{ width: 300 }} />
		</Layout.Header>
	)
}

export default MainHeader
