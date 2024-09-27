import { Avatar, Flex } from "antd";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate()



  return (
    <Flex
      className="relative px-[30px] py-[10px] mb-[20px] border-[2px] border-solid text-[20px]"
      gap="middle"
      justify="space-between"
      align="center"
    >
      <div className="cursor-pointer font-bold hover:text-[gray]" onClick={() => navigate('/')}>
        <span>Logo</span>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <span>Blogs</span>
      </div>
      <div className="flex justify-end items-center space-x-2">
        <SearchBar />
        <Avatar
          shape="square"
          size={50}
          src="https://res.cloudinary.com/du6uinlwy/image/upload/v1716912737/TripMates/profile-user_w32qio.png"
        />
        <span>user name</span>
      </div>
    </Flex>
  );
};

export default Header;
