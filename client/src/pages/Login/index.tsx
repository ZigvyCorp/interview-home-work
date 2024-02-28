import LoginForm from "src/components/form/LoginForm";
import image from "src/assets/image.jpg";

const Login = () => {
    return (
        <div className="text-black w-full bg-gray-100 h-screen flex items-center justify-center">
            <div className="w-1/2 px-10 pb-5  h-4/5 rounded-[60px]">
                <img src={image} className="w-full h-full rounded-[60px] " />
            </div>

            <div className="w-1/3">
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
