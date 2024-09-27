import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import("@modules/Auth/Login/LoginPage"), {
  ssr: false,
});

const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <LoginPage />
    </>
  );
};

export default Login;
