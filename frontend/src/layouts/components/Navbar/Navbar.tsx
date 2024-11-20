import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Flex, Modal, Typography } from 'antd';
import { useState } from 'react';
import SearchPost from '~/features/search/components/SearchPost/SearchPost';
import { resetSelectedPost } from '~/features/search/searchSlice';
import { useAppDispatch } from '~/hooks/useRedux';

export default function Navbar() {
    const [openSearchModal, setOpenSearchModal] = useState(false);
    const dispatch = useAppDispatch();

    const handleCloseModal = () => {
        setOpenSearchModal(false);
        dispatch(resetSelectedPost());
    };

    return (
        <>
            <Flex
                vertical={false}
                align='center'
                justify='space-between'
                style={{ border: '5px solid black' }}
            >
                <Flex align='center' gap={16} flex={0.3}>
                    <div
                        style={{ width: '70px', height: '70px', backgroundColor: '#e6e6e6' }}
                    ></div>
                    <Typography.Title level={2} style={{ marginBottom: 0 }}>
                        Logo
                    </Typography.Title>
                    <SearchOutlined
                        style={{
                            fontSize: 50,
                            cursor: 'pointer',
                        }}
                        onClick={() => setOpenSearchModal(!openSearchModal)}
                    />
                </Flex>
                <Typography.Title
                    level={2}
                    style={{
                        backgroundColor: '#e6e6e6',
                        marginBottom: 0,
                        padding: '16px 5rem',
                        borderRightWidth: '5px',
                        borderLeftWidth: '5px',
                        borderLeftColor: 'black',
                        borderRightColor: 'black',
                        borderRightStyle: 'solid',
                        borderLeftStyle: 'solid',
                    }}
                >
                    Blogs
                </Typography.Title>
                <Flex align='center' flex='0.3'>
                    <UserOutlined
                        style={{
                            fontSize: 70,
                            borderRightWidth: '5px',
                            borderLeftWidth: '5px',
                            borderLeftColor: 'black',
                            borderRightColor: 'black',
                            borderRightStyle: 'solid',
                            borderLeftStyle: 'solid',
                        }}
                    />
                    <Typography.Title
                        level={2}
                        style={{
                            marginLeft: '16px',
                            marginTop: 0,
                            marginBottom: 0,
                        }}
                    >
                        Adam Levine
                    </Typography.Title>
                </Flex>
            </Flex>
            {openSearchModal ? (
                <Modal open={openSearchModal} onCancel={handleCloseModal} onOk={handleCloseModal}>
                    <SearchPost />
                </Modal>
            ) : null}
        </>
    );
}
