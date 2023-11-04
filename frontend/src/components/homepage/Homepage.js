import { Avatar, Segmented } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { state } from "../../reducer/PostSlice"
import { useEffect, useState } from 'react';

export default function Homepage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const posts = useSelector(state)
    const [segment, setSegment] = useState('Blogs')

    useEffect(() => {
        if (segment === 'Blogs') {
            dispatch({ type: 'request_post', payload: [] })
            navigate('/blog')
        }
        if (segment === 'User') {
            navigate('/account')
        }
    }, [segment])

    function handleSegmentedChange(value) {
        setSegment(value)
    }

    return (
        <div id="homepage">
            <Segmented onChange={handleSegmentedChange} block options={[{label: (<p>Logo</p>), value: 'Logo'}, 'Blogs', { label: ( <div style={{ display: 'flex' }}> <div style={{ margin: 'auto', display: 'flex' }}><Avatar shape='square' icon={< UserOutlined />} /> <p style={{ margin: '0 1em' }}>Adam Levine</p> </div></div>), value: 'User'}]} style={{ border: '2px solid black' }} defaultValue={'Blogs'} size='large' />
            <Outlet />
        </div>
    )
}