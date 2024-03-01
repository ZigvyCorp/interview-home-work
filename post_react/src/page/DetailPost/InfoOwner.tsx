import React from "react";
import { I_User } from "../../model/userInterface";
import { useSelector } from "react-redux";
import { I_Post } from "../../model/postInterface";
import moment from "moment";
import { NavLink } from "react-router-dom";

type Props = {
  info: I_User | undefined;
};

export const InfoOwner: React.FC<Props> = ({ info }) => {
  let { listPost } = useSelector((state: any) => state.postSlice);

  return (
    <div
      id='info__owner'
      className='sticky top-32 flex flex-col space-y-5 items-center bg-white p-5 h-[400px] rounded-xl shadow-lg'>
      <img
        src={`https://i.pravatar.cc/150?u=${info?._id}`}
        className='w-24 h-24 rounded-full border-2'
        alt='avatar'
      />
      <div>
        <h3 className='text-xl font-bold'>{info?.name}</h3>
        <p>
          <span className='font-semibold'>Dob:</span> {info?.dob}
        </p>
      </div>
      <div>
        <h3 className='mb-2'>Another Post: </h3>
        <div>
          {listPost &&
            listPost.slice(1, 3).map((item: I_Post, index: number) => {
              return (
                <NavLink key={item._id} to={`/detail/${item._id}`}>
                  <div className='flex items-center space-x-3 mb-3'>
                    <img
                      src={`https://picsum.photos/id/${
                        index + Math.floor(Math.random() * 100)
                      }/50/50`}
                    />
                    <div>
                      <h2 className='text-lg font-bold'>{item.title}</h2>
                      <p className='text-sm'>{moment(item.createdAt).format("LL")}</p>
                    </div>
                  </div>
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
};
