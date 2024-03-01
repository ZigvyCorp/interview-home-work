import styles from '../../styles/custom.module.css'
import { MdOutlineAccountBox } from "react-icons/md";
import { InputGroup, InputGroupText, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap'
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setTitle, toggleLoginModal, togglePostModal } from '../../actions/dataAction';
import { useState } from 'react';
const Header = () => {
    const { user } = useSelector(state => state.data)
    const username = user !== null ? user?.account?.username : (JSON.parse(localStorage.getItem('user')) !== null || JSON.parse(localStorage.getItem('user')) !== undefined ? JSON.parse(localStorage.getItem('user'))?.username : '')
    const dispatch = useDispatch()
    const handleSetTitle = (e) => {
        dispatch(setTitle(e.target.value))
    }
    const handleLogin = () => {
        dispatch(toggleLoginModal(true, 'login'))
    }
    const handleLogout = () => {
        dispatch(toggleLoginModal(true, 'logout'))
    }
    const handleCreatePost = () => {
        dispatch(togglePostModal())
    }
    // user dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div
            className={styles.custom_header}
        >
            <div className='col-5 d-flex align-items-center'>
                <div style={{ width: '10%', background: '#e6e6e6', color: 'transparent' }}>a</div>
                <p style={{ textAlign: 'left' }} className='my-0'>Logo</p>
            </div>
            <div className={`${styles.blogs_tab} col-2`}>
                <p className='my-0'>Blogs</p>
                <div className={styles.triangle}></div>
                <div className={styles.triangle_border}></div>
            </div>

            <div className='col-5 d-flex align-items-center justify-content-evenly'>
                <div className='col-5'>
                    <InputGroup>
                        <InputGroupText>
                            <IoSearchOutline />
                        </InputGroupText>
                        <Input placeholder="Search title..." onChange={e => handleSetTitle(e)} />
                    </InputGroup>
                </div>
                <div className='col-5 d-flex align-items-center'>
                    <MdOutlineAccountBox className={styles.custom_icon} />

                    {user === null && localStorage.getItem('user') === null
                        ? <span className='my-0 mx-2' style={{ cursor: 'pointer' }} onClick={handleLogin}>Login</span>
                        : <Dropdown isOpen={dropdownOpen} toggle={toggle} className='w-75 text-start d-flex align-items-center'>
                            <DropdownToggle caret color='light'>{username}</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={handleLogout} >Log out</DropdownItem>
                                <DropdownItem onClick={handleCreatePost} >Create post</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    }
                </div>
            </div>
        </div>
    )
}
export default Header