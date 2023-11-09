import React, { memo, useState } from 'react'
import { Loading, PaginationComponent, RateStar } from "components";
import Avatar from "assets/img/avatar.png";
import { useSelector } from 'react-redux';
import { formatCreatedAt } from "utils/helpers";
import { filterStarFeedback } from 'utils/constants';


const Feedback = ({ feedback, setDataEdit, setIsModal, setSelectedStar, selectedStar, count }) => {
    const { currentUser } = useSelector((state) => state.userSlice);



    return (
        <div className="bg-sub mt-5 p-5 ">
            <h1 className="text-xl ">RATING PRODUCT ({count})</h1>
            <div className="flex items-center justify-around my-3 bg-main py-5">
                {
                    filterStarFeedback.map((el) => {
                        return <div onClick={() => setSelectedStar(el.value)} className={` ${selectedStar === el.value && "border-sub text-main"} border-2 bg-sub min-w-[100px] text-center cursor-pointer`} key={el.value}>{el.title}</div>
                    })
                }
            </div>

            <Loading isLoading={feedback ? false : true}>
                {feedback?.feedbacks.length > 0 ? (

                    <>
                        {feedback?.feedbacks?.map((el) => {
                            return (
                                <div
                                    key={el?._id}
                                    className="flex items-start mt-3 py-3 border-b-2"
                                >
                                    <img className="w-[50px] cursor-pointer shadow-md rounded-full" src={el?.postedBy?.image ? `${el?.postedBy?.image}` : Avatar} alt="" />
                                    <div className="ml-3 ">

                                        {
                                            currentUser?._id === el?.postedBy?._id ? <p className="text-sm text-danger font-semibold">
                                                You
                                            </p> : <p className="text-sm">
                                                {el?.postedBy?.firstName}
                                                {el?.postedBy?.lastName}
                                            </p>
                                        }
                                        <div className="text-sm text-sub">{formatCreatedAt(el?.createdAt)}</div>

                                        <RateStar
                                            style={{ fontSize: "12px" }}
                                            value={el.star}
                                            disabled={true}
                                        />
                                        <p>{el?.comment}</p>
                                        {currentUser?._id === el?.postedBy?._id && <span onClick={() => {
                                            setIsModal(true)
                                            setDataEdit({ star: el?.star, comment: el?.comment })
                                        }} className="text-sub text-sm cursor-pointer hover:underline">Edit</span>}
                                    </div>
                                </div>
                            );

                        })}
                        <PaginationComponent pageSize={5} total={feedback?.count} />
                    </>
                ) : (
                    <p className="flex items-center justify-center text-sub min-h-[200px]">
                        Not have feedback
                    </p>
                )}
            </Loading>

        </div>
    )
}

export default memo(Feedback)