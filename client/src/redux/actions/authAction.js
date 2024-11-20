import * as api from "../../api";
import * as type from "../constants/authConstant";

const actionLogin = (user, navigate) => {
    return async (dispatch) => {
        try {
            const res = await api.signIn(user);
            const { data, access_token } = res.data;
            dispatch({
                type: type.AUTH,
                data: { ...data, access_token },
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };
};

const actionLogout = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: type.LOGOUT,
            });
        } catch (err) {
            console.log(err);
        }
    };
};

const actionSignup = (user, navigate) => {
    return async (dispatch) => {
        try {
            const { data } = await api.signUp(user);
            dispatch({
                type: type.SIGNUP,
                data,
            });
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };
};

export { actionLogin, actionLogout, actionSignup };
