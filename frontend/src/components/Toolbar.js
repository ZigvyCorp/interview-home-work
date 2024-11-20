import { useState, useEffect } from 'react';
import { Button, Image, Flex, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserAction } from '../store/actions'
const Toolbar = () => {
    const [isScrolled, setScroll] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    };
    window.addEventListener('scroll', handleScroll);

    const dispatch = useDispatch()
    const oneUser = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(fetchUserAction());
    }, [dispatch]);
    return (
        <Flex style={{
            position: "sticky", top: 0,
            zIndex: 1,
            background: '#fff',
            padding: '16px',
            boxShadow: isScrolled > 0 ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
        }} justify="space-between">

            <Image
                width={80}
                src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOEkwREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--b1d24c4196656ef3cb626add71a4fab4b0d58fe1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--1b8988b96ed4a58d3628eb3340c8b231786ccfc0/zigvy-logo.jpg"
            />

            <h2 style={{ padding: '10px' }}>Posts </h2>

            <div style={{ padding: '18px' }}><Avatar style={{ verticalAlign: 'middle' }} size="large">
                {'L'}
            </Avatar>
                <Button
                    size="small"
                    style={{ margin: '0 16px', verticalAlign: 'middle' }}
                >
                    {oneUser[0]?.username}
                </Button></div>
        </Flex>
    );
};

export default Toolbar;
