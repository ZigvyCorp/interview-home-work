import { Modal } from 'antd';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import FormNews from './FormNews';
import Avatar from "assets/img/avatar.png";
import path from 'routes/path';
import Filter from './Filter';

const SidebarBlog = () => {
    const [isModal, setIsModal] = useState(false);
    const { currentUser } = useSelector((state) => state.userSlice);
    const navigate = useNavigate();


    return (
        <aside className="flex flex-col col-span-2 ">
            <Modal
                title={<h1 className="text-2xl font-semibold">Create News</h1>}
                centered
                open={isModal}
                onCancel={() => setIsModal(false)}
                footer={null}
                width={500}

            >
                <FormNews type="create" setIsModal={setIsModal} />
            </Modal>
            <div className=" px-3 py-5 rounded-lg mb-5 flex items-center gap-3">
                <img
                    className="w-[40px] shadow-md rounded-full"
                    src={currentUser?.image ? `${currentUser?.image}` : Avatar}
                    alt=""
                />
                <div className="bg-sub rounded-2xl px-3 py-2 w-full text-sm text-sub cursor-pointer">
                    {currentUser ? (
                        <p onClick={() => setIsModal((prev) => !prev)}>
                            {currentUser?.firstName + currentUser?.lastName}, What's news
                            today?
                        </p>
                    ) : (
                        <p onClick={() => navigate(`/${path.LOGIN}`)}>
                            Login to create your post!
                        </p>
                    )}
                </div>
            </div>

        </aside>
    )
}

export default SidebarBlog