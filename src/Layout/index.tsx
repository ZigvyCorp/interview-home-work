import './index.scss';
import { FunctionComponent } from 'react';
import {
	Layout,
	Avatar,
	Typography,
	Space,
	Row,
	Col,
	Divider,
	Input,
	Switch,
} from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { Link as RouterLink, Outlet, useNavigate } from 'react-router-dom';
const { Search } = Input;
const { Header, Content } = Layout;
const { Text, Link } = Typography;

const BlogLayout: FunctionComponent<any> = ({ userName = 'Nguyen Tai' }) => {
	const navigate = useNavigate();

	const onSearch = (value: string) => {
		if (!value) return;
		navigate(`/posts/search/${value}`);
	};

	const onChangeMode = (isDarkMode: boolean) => {
		if(isDarkMode){
			document.documentElement.style.setProperty('--bg-color', '#18181b');
			document.documentElement.style.setProperty('--text-color', '#ffffff');
		}else{
			document.documentElement.style.setProperty('--bg-color', '#eeeeee');
			document.documentElement.style.setProperty('--text-color', '#18181b');
		}
	};

	return (
		<Layout>
			<Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
				<nav className='header-inner'>
					<Space>
						<div className='blog-logo'>
							<RouterLink to='/posts'>NT.</RouterLink>
						</div>
						<div className='blog-menu'>
							<a className='blog-menu__item'>📝 Blog</a>
						</div>
					</Space>
					<Space size={'middle'} direction='horizontal'>
						<Col>
							<Search
								size='middle'
								placeholder='Search...'
								onSearch={onSearch}
								style={{ width: 250 }}
								loading={false}
							/>
						</Col>
						<Col className='user-profile'>
							<Switch
								style={{'margin': '0 24px'}}
								checkedChildren='Dark'
								unCheckedChildren='Light'
								defaultChecked
								onChange={onChangeMode}
							/>
							<Avatar src='https://joeschmoe.io/api/v1/random' />
							<Text className='user-profile__name'>{userName}</Text>
						</Col>
					</Space>
				</nav>
			</Header>
			<Content className='main-content'>
				<div className='main-inner'>
					<Outlet />
				</div>
			</Content>
			<Footer>
				<Row justify={'center'}>
					<Space direction='vertical'>
						<Row justify={'center'} align={'middle'}>
							<Col>
								<Link>Medium</Link>
							</Col>
							<Divider type='vertical' />
							<Col>
								<Link>Twitter</Link>
							</Col>
						</Row>
						<Row justify={'center'}>© 2022 Nguyen Tai - Built with ReactJS</Row>
					</Space>
				</Row>
			</Footer>
		</Layout>
	);
};

export default BlogLayout;
