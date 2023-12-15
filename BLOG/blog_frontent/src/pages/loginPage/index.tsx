import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BannerLogin from "assets/banner_login.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/userActions";
import { selectCurrentUser } from "../../redux/reducers/userReducer";

interface errorInputType {
  blankInputEmail: boolean;
  wrongEmail: boolean;
}

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState<string>("");

  const initErrorInput = {
    blankInputEmail: false,
    wrongEmail: false,
  };
  const [errorInput, setErrorInput] = useState<errorInputType>(initErrorInput);

  const isBlankInput = (inputValue: string) => {
    return inputValue.replaceAll(" ", "") === "";
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputEmail(inputValue);

    if (errorInput.blankInputEmail) {
      setErrorInput({ ...errorInput, blankInputEmail: false });
    }
  };

  const handleSubmit = () => {
    if (isBlankInput(inputEmail)) {
      setErrorInput({ ...errorInput, blankInputEmail: true });
      return;
    }

    dispatch(login(inputEmail));
  };

  const isCurrentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    if (isCurrentUser) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCurrentUser]);

  const ThrowErrorInput = () => {
    if (errorInput.blankInputEmail)
      return <p className="alert alert-danger  w-100">Vui lòng nhập Email</p>;
    if (errorInput.wrongEmail)
      return <p className="alert alert-danger w-100">Email bạn nhập sai</p>;

    return <div style={{ height: "75px" }}> </div>;
  };

  return (
    <div style={{ position: "relative" }}>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block  ">
                    <img
                      src={BannerLogin}
                      alt="Banner Login Page"
                      className="bg-black w-100  h-100 rounded-start-2"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form style={{ minWidth: "80%" }}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3"></i>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3">ĐĂNG NHẬP</h5>
                        <h6 className="fw-normal mb-3 ">
                          Do trang web đang trong quá trình phát triển nên chưa
                          triển khai hoàn thiện tính authentication. Bạn có thể
                          login trực tiếp bằng cách nhập địa chỉ mail. Đây là
                          danh sách tải khoản được mở cho giai đoạn thử nghiệm:
                          <br />
                          ► Sincere@april.biz <br />
                          ► Shanna@melissa.tv <br />► Nathan@yesenia.net
                        </h6>
                        <ThrowErrorInput />
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="inputEmail">
                            Email
                          </label>
                          <input
                            type="username"
                            id="inputEmail"
                            className="form-control form-control-lg border-1 border-black"
                            name="Email"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            onClick={handleSubmit}
                          >
                            Đăng nhập
                          </button>
                        </div>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-lg"
                        >
                          {" "}
                          <Link to="/" className="nav-link ">
                            Quay lại trang chủ
                          </Link>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
