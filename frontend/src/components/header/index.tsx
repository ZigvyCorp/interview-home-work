import { Col, Dropdown, MenuProps, Row, Space } from "antd";
import { ImUser } from "react-icons/im";
import { VscTriangleDown } from "react-icons/vsc";
import { MdExpandMore } from "react-icons/md";
import { getCookie, removeCookie } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";
const HeaderSection = () => {
  const userInfo = getCookie("userInfo");
  const navigate = useNavigate();
  const handleSignout = () => {
    removeCookie("x-access-token");
    removeCookie("userInfo");
    navigate("/");
  };
  const items: MenuProps["items"] = [
    {
      label: <p onClick={handleSignout}>Log out</p>,
      key: "0",
    },
    {
      label: <p onClick={handleSignout}>Create post</p>,
      key: "0",
    },
  ];
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <Row className="mx-4 mt-3">
      <Col
        xs={9}
        sm={10}
        md={9}
        lg={8}
        xl={10}
        className=" flex items-center border-4 border-black"
      >
        <div className="w-[10%] h-[100%] bg-[#e6e6e6] max-md:w-[20%] max-sm:w-[20%]"></div>
        <h2 className="pl-3 py-3">Logo</h2>
      </Col>
      <Col
        xs={6}
        sm={4}
        md={6}
        lg={8}
        xl={4}
        className=" text-center  bg-[#e6e6e6] border-y-4 border-black"
        style={{ position: "relative" }}
      >
        <div className="blog-triagle">
          <VscTriangleDown className="w-[100%] h-[100%]" color="#e6e6e6" />
        </div>
        <div className="blog-triagle-2">
          <VscTriangleDown className="w-[100%] h-[100%]" />
        </div>
        <h2 className="pl-3 py-3">Blogs</h2>
      </Col>
      <Col
        xs={9}
        sm={10}
        md={9}
        lg={8}
        xl={10}
        className="flex items-center justify-end border-4 border-black"
      >
        <div className="w-[10%] h-[100%] border-x-4 border-[#606060] max-md:w-[20%] max-sm:w-[20%] ">
          <ImUser className="w-[100%] h-[100%]" color="#606060" />
        </div>
        {userInfo?._id ? (
          <Dropdown menu={{ items }} trigger={["click"]}>
            <div className="cursor-pointer text-xl flex items-center">
              <Space>{userInfo?.username}</Space>
              <MdExpandMore />
            </div>
          </Dropdown>
        ) : (
          <h2 className="pl-3 py-3" onClick={handleLogin}>
            Log In
          </h2>
        )}
        <div className="w-[5%] h-[100%]"></div>
      </Col>
    </Row>
  );
};
export default HeaderSection;
