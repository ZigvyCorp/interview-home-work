import React, { memo, useEffect, useState, useRef } from "react";
import { userService } from "services/userService";
import { chatService } from "services/chatService";
import Avatar from "assets/img/avatar.png";
import TimeAgo from "react-timeago";
import InputEmoji from "react-input-emoji";
import { icons } from "utils/icons";
import { Loading } from "components";

const Chatbox = ({ currentChatbox, currentUserId, setSendMsg, receiveMsg }) => {
  const [userData, setUserData] = useState(null);
  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { FiPlus, AiOutlineSend } = icons;
  const scroll = useRef();

  const handleGetUserId = async (id) => {
    const rs = await userService.handleGetUserId(id);
    if (rs?.success) {
      setUserData(rs.response);
    }
  };

  const handleSendMessage = async () => {
    const messageData = {
      chatId: currentChatbox?._id,
      text: newMessage,
    };
    // send msg to database
    const rs = await chatService.handleSendMessage(messageData);
    if (rs?.success) {
      handleGetMessage(currentChatbox?._id);
    }

    // send msg to socket
    const receiverId = currentChatbox?.members?.find(
      (el) => el !== currentUserId
    );
    setSendMsg({ ...messageData, receiverId });
  };

  const handleGetMessage = async (chatId) => {
    const rs = await chatService.handleGetMessage(chatId);
    if (rs.success) {
      setMessage(rs?.message);
    }
  };

  // set message socket
  useEffect(() => {
    if (receiveMsg && receiveMsg.chatId === currentChatbox._id) {
      setMessage((prev) => [...prev, receiveMsg]);
    }
  }, [receiveMsg]);

  // get user by id
  useEffect(() => {
    const userId = currentChatbox?.members?.find((el) => el !== currentUserId);
    handleGetUserId(userId);
  }, [currentChatbox?.members, currentUserId]);

  // get msg
  useEffect(() => {
    currentChatbox && handleGetMessage(currentChatbox?._id);
  }, [currentChatbox]);

  // always scroll by message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <Loading isLoading={userData ? false : true}>
      <div className="flex items-center gap-3 border-b-2 cursor-pointer p-2 rounded-lg">
        <img
          className="w-[50px] cursor-pointer shadow-md rounded-full"
          src={userData?.image ? `${userData?.image}` : Avatar}
          alt=""
        />
        <div className="text-sm">
          <h3 className="font-semibold">
            {userData?.firstName + "" + userData?.lastName}
          </h3>
        </div>
      </div>
      <div className="h-[60vh] overflow-auto ">
        {message.map((el) => {
          return (
            <div
              ref={scroll}
              key={el._id}
              className={`${el.senderId === currentUserId ? "text-end" : "text-start"
                } px-2 my-5`}
            >
              <span
                className={`${el.senderId === currentUserId
                  ? "bg-feature text-hover"
                  : "bg-main"
                  } rounded-xl p-2`}
              >
                {el.text}
              </span>
              <div className="text-sm text-sub italic mt-2">
                <TimeAgo date={el.createdAt} />
              </div>
            </div>
          );
        })}
      </div>
      <div className=" w-full  flex items-center px-2">
        <div className="bg-main p-2 rounded-lg">
          <FiPlus />
        </div>
        <InputEmoji
          value={newMessage}
          onChange={(msg) => setNewMessage(msg)}
          cleanOnEnter
          onEnter={handleSendMessage}
          placeholder="Type a message"
        />
        <button
          onClick={handleSendMessage}
          className="bg-feature text-hover p-2 rounded-lg"
        >
          <AiOutlineSend />
        </button>
      </div>
    </Loading>
  );
};

export default memo(Chatbox);
