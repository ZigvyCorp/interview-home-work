import React, { memo, useState, useRef } from "react";
import { icons } from "utils/icons";
import { Button, Loading } from "components";
import { toastError, toastSucess } from "utils/helpers";
import { blogService } from "services/blogService";
import { useDispatch } from "react-redux";
import { getAllPosts } from "redux/asyncAction";
import { useNavigate } from "react-router-dom";

const FormNews = ({ setIsModal, data, type }) => {
  const { AiFillPicture, FaTimes, MdCloudUpload, MdDelete } = icons;
  const [content, setContent] = useState(data ? data.content : "");
  const [title, setTitle] = useState(data ? data.title : "");
  const [images, setImages] = useState(data ? data.image : null);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChooseImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setImages(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("images: ", images);
    const formData = new FormData();

    formData.append("content", content);
    formData.append("image", images);
    formData.append("title", title);

    let rs;
    if (type === "create") {
      rs = await blogService.handlePostNews(formData);
    } else {
      rs = await blogService.handleUpdateNews(data?._id, formData);
    }

    if (rs?.success) {
      setLoading(false);
      toastSucess(rs?.msg);
      setIsModal((prev) => !prev);
      dispatch(getAllPosts());
      navigate("/")
    } else {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Loading isLoading={loading} fullscreen />
      <div>
        <input
          className="w-full border-2 p-2"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      </div>
      <div>
        <textarea
          className="w-full border-2 mt-5 p-2 outline-none resize-none min-h-[20vh]"
          placeholder="What's news today?"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      {/* <div className="grid grid-cols-4 max-h-[250px] gap-5 overflow-auto mb-5">
        {images && (
          <div className="relative ">
            <img
              className=" object-cover w-[100px] h-[100px]"
              // src={img.camera ? img.camera : URL.createObjectURL(img)}
              src={images ? URL.createObjectURL(images) : images}
              alt=""
            />
            <span
              onClick={() => setImages(null)}
              className="absolute top-0 right-0 p-[3px] bg-slate-300 rounded-full cursor-pointer"
            >
              <FaTimes />
            </span>
          </div>
        )}
      </div> */}
      {/* <div className="flex items-center justify-center gap-5 mt-3">
        <label className=" flex flex-col items-center justify-center cursor-pointer">
          <div className="flex flex-col items-center justify-center gap-2">
            <AiFillPicture className="text-main text-3xl" />
          </div>
          <input
            multiple
            onChange={handleChooseImage}
            type="file"
            name="images"
            accept="image/*"
            className="w-0 h-0"
          />
        </label>
      </div> */}

      {!images ? (
        <>
          <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
              <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
              <p className="text-gray-500 hover:text-gray-700">
                Click here to upload
              </p>
            </div>
            <input
              type="file"
              name="thump"
              accept="image/*"
              onChange={handleChooseImage}
              className="w-0 h-0"
            />
          </label>
        </>
      ) : (
        <>
          <div className="relative h-full">
            <img
              src={images?.preview ? images.preview : `${images}`}
              alt="uploaded image"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out"
              onClick={() => setImages(null)}
            >
              <MdDelete className="text-white" />
            </button>
          </div>
        </>
      )}
      <Button type="submit" name="Post" />
    </form>
  );
};

export default memo(FormNews);
