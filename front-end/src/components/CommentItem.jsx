import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <div className="flex mt-5 mb-7">
      <div className="w-[10%]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUrdr1GgmLfN6Ln3VjFFzFAhQqXwLjlpFS9g&usqp=CAU"
          alt="#"
          className="w-16 h-16"
        />
      </div>

      <div className="ml-5 w-[90%]">
        <div className="flex items-center">
          <p className="mr-3 text-sm text-gray-500">{comment.name}</p>
          <p className="text-gray-400">a day ago</p>
        </div>

        <p className="mt-1 mb-4">{comment.body}</p>

        <p className="text-gray-400 text-sm">Reply to</p>
      </div>
    </div>
  );
};

export default CommentItem;
