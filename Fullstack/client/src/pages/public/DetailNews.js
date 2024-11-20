import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogService } from "services/blogService"
import Avatar from "assets/img/avatar.png";
import { formatCreatedAt, toastError, toastSucess } from "utils/helpers";
import { CommentBlog, FormNews, Interact, NewsItem } from 'layouts';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from 'redux/asyncAction';
import { icons } from 'utils/icons';
import { Modal } from 'antd';
import path from 'routes/path';
const DetailNews = () => {
    const [news, setNews] = useState(null)
    const [isSetting, setIsSetting] = useState(false);
    const { BsThreeDots } = icons;
    const [isModal, setIsModal] = useState(false);
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.userSlice);
    const menuRef = useRef();

    const handleCloseMenu = (e) => {
        if (!menuRef.current?.contains(e.target)) {
            setIsSetting(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleCloseMenu);

        return () => {
            document.removeEventListener("mousedown", handleCloseMenu);
        };
    });
    const getCurrentNews = async (newsId) => {
        const rs = await blogService.handleGetCurrentNews(newsId)
        if (rs?.success) {
            setNews(rs?.blog)
        }
    }

    useEffect(() => {
        getCurrentNews(id)
    }, [id])
    const handleDeleteNews = async (id) => {
        const rs = await blogService.handleDeleteNews(id);
        if (rs?.success) {
            toastSucess(rs?.msg);
            dispatch(getAllPosts());
            navigate(`/`)
        } else {
            toastError(rs?.msg);
        }
    };




    return (
        <div className="flex items-center justify-center">
            <Modal
                title={<h1 className="text-2xl font-semibold">Create News</h1>}
                centered
                open={isModal}
                onCancel={() => setIsModal(false)}
                footer={null}
                width={500}
            >
                <FormNews type="update" setIsModal={setIsModal} data={news} />
            </Modal>
            <div className="w-[70%]">
                {news && <div className="bg-sub px-3 py-5 rounded-lg mb-5 shadow-lg ">
                    <div>
                        <div className="flex justify-between ">
                            <div className="flex items-center gap-3 mb-3 ">
                                <img
                                    className="w-[50px] shadow-md rounded-full"
                                    src={news?.author?.image ? `${news?.author?.image}` : Avatar}
                                    alt=""
                                />
                                <div className="text-sm ">
                                    <h3 className="font-semibold ">
                                        {news?.author?.firstName + "" + news?.author?.lastName}
                                    </h3>
                                    <span className="text-[12px] italic text-sub">
                                        {formatCreatedAt(news?.createdAt)}
                                    </span>
                                </div>
                            </div>
                            {currentUser?._id === news?.author?._id && (
                                <div
                                    ref={menuRef}
                                    onClick={() => setIsSetting((prev) => !prev)}
                                    className="cursor-pointer relative"
                                >
                                    <BsThreeDots />
                                    {isSetting && (
                                        <div className="bg-sub shadow-2xl absolute left-[-70px] top-[20px] px-2 text-sm ">
                                            <p
                                                onClick={() => setIsModal((prev) => !prev)}
                                                className="p-2 hover:bg-main"
                                            >
                                                Edit
                                            </p>
                                            <p
                                                onClick={() => handleDeleteNews(news?._id)}
                                                className="p-2 hover:bg-main"
                                            >
                                                Remove
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <img
                            className="w-full h-[full] object-cover"
                            src={news?.image}
                            alt=""
                        />
                        <h1 className="my-3 text-2xl font-semibold">{news?.title}</h1>
                        <p className="my-3 ">{news?.content}</p>
                    </div>






                    <div>
                        <CommentBlog news={news} getCurrentNews={getCurrentNews} id={id} />
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default DetailNews