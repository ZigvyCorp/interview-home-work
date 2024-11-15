import { Avatar, Button, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/auth-provider.tsx";

function PageHeader() {
  const navigate = useNavigate();
  const auth = useAuth();

  const renderUsername = <div className={"flex gap-2 justify-center items-center"}>
    <p className={"text-white"}>Hello: {auth.loggedUser?.username}</p>
    <Button type={"dashed"} onClick={auth.logoutCurrentUser}>Logout</Button>
  </div>;

  const renderLoginButton = <Button type={"primary"} onClick={() => {
    auth.openLoginModal();
  }}>Login</Button>;

  return (
    <Layout.Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className={"flex justify-between w-full"}>
        <div>
          <Avatar onClick={() => {
            navigate("/");
          }} src={"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"} />
        </div>
        <div>
          {
            auth.loading ? <p className={"text-white"}>Loading...</p> : (!auth.isAuth ? renderLoginButton : renderUsername)
          }
        </div>
      </div>
    </Layout.Header>
  );
}

export default PageHeader;