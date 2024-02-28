import { UserOutlined } from '@ant-design/icons'
import { Avatar, Layout } from 'antd'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../../logo.svg'
const { Header, Content } = Layout

const DefaultLayout = () => {
	return (
		<Layout>
			<Header style={{ display: 'flex', alignItems: 'center' }}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<img src={logo} alt="" width={40} height={40} />
				</div>
				<div
					style={{
						flex: 1,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<NavLink
						to="/"
						className={({ isActive, isPending }) =>
							isPending ? 'pending' : isActive ? 'active nav-link' : 'nav-link'
						}
					>
						Messages
					</NavLink>
				</div>
				<div style={{ color: 'white' }}>
					<Avatar
						style={{
							background: '#bfbfbf',
						}}
						size={40}
						icon={<UserOutlined />}
					/>{' '}
					<span>Lê Trạng Lân</span>
				</div>
			</Header>
			<Content style={{ padding: '0 48px' }}>
				<Outlet />
			</Content>
		</Layout>
	)
}

export default DefaultLayout
