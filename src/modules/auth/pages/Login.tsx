import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { notification } from "antd";

import { NotifyContext, useAppDispatch } from "@/modules/shared";

import { LoginForm, setAuthCredentials } from "@/modules/auth";

import { ILoginParams, LOGIN_FORM, LOGIN_SCHEMA } from "@/modules/auth";

import { login } from "@/modules/auth";

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { api } = useContext(NotifyContext);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginParams>({
    resolver: yupResolver(LOGIN_SCHEMA),
    defaultValues: LOGIN_FORM,
  });

  const onSubmit = async (data: ILoginParams) => {
    dispatch(login(data))
      .unwrap()
      .then((value) => {
        // if (accessToken) {
        //   if (hasAccess(allowedRoles, permissions)) {
        //     setAuthCredentials(accessToken, user_id, permissions, user_name);
        //     router.push(ROUTES.DASHBOARD);
        //     return;
        //   }
        //   setErrorMsg("form:error-enough-permission");
        // } else {
        //   setErrorMsg("form:error-credential-wrong");
        // }

        if (value.accessToken) {
          setAuthCredentials(value.accessToken, value.profile.id, value.permission, value.profile.name);

          api.success({
            message: "Login success",
          });
        }
      })
      .catch((errors) => {
        api.error({
          message: errors.message,
        });
      });
  };

  return (
    <div className="w-screen min-h-screen p-[24px] flex justify-center items-center bg-bg_grey">
      <div className="w-full max-w-[600px] min-h-[400px] bg-white rounded-lg p-[12px]">
        <LoginForm control={control} errors={errors} handleSubmit={handleSubmit(onSubmit)} />
      </div>
    </div>
  );
};

export default LoginPage;
