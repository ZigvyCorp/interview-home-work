import React from "react"
import { Button } from "antd"
import moment from "moment"

const PostHeader = ({ author, created, title, idPost, tags }) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
  return (
    <div className=" max-w-full md:p-10 font-bold">
      <div className="flex flex-col md:flex-row justify-between mt-6 md:mt-10 items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <div className="mb-2">Author: {author}</div>
          <div>
            Created At: {moment(created).format("MMMM Do YYYY, h:mm:ss a")}
          </div>
        </div>
        <div className="text-3xl mb-4 md:mb-0">{title}</div>
        <div className="max-w-md md:flex-grow flex flex-wrap -mx-2">
          {tags?.map((tag) => (
            <Button
              className="m-2"
              style={{ backgroundColor: getRandomColor(), color: "white" }}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostHeader
