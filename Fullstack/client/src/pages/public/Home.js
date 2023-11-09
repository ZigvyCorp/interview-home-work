import React from "react";
import BlogPost from "components/Blog/BlogPost";
import Slider from "components/Slider/Slider";
import BestSeller from "./BestSeller";
import DealDaily from "./DealDaily";
import ListCategory from "./ListCategory";
import { useSelector } from "react-redux";

const Home = () => {
  // const { isLoggedIn, currentUser } = useSelector((state) => state.userSlice);
  const images = ["https://lh3.googleusercontent.com/KU0g__QTkLdAAyt_Oa18jVsgyXlIkWGSoEZNHKSjLtSB91w-442-nKtaUDOFantvGyLslr22rM_kJVkWARby5s75UFrXWUo=w1920-rw", "https://lh3.googleusercontent.com/AlIQ9zLNegLMYK3iZ0C38iJTsSuSBolyYK4SH_LmhKgohVHcmz6atxdRtydFItYjNYbhBf_ZdBKg6n0IyHbKOvC7EwqAsQc=w1920-rw", "https://lh3.googleusercontent.com/NEyGqAS4HkBmVGWbdLxRCJ7v4n7Xz-Xcfs6ffoxCNZMHBg0txwJk7L0FVyBvjZ9mwdFsV915-uAWlcX_JPHD1yJSq2EYfeV6=w1920-rw"]
  return (
    <div className="w-full">
      <Slider className="object-cover w-full h-[75vh]" images={images} autoplay />
      {/* <DealDaily /> */}
      <ListCategory />
      <BestSeller />
      {/* <BlogPost /> */}
    </div>
  );
};

export default Home;
