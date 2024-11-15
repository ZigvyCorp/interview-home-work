import { createContext, ReactNode, useContext, useState } from "react";
import { Button, Input, Modal } from "antd";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useGetLoggedUser, useLogin, useLogout } from "@/api/hooks/use-auth-query.ts";
import { UserDto } from "@/api/models/user-dto.ts";

type AuthContext = {
  openLoginModal: () => void;
  logoutCurrentUser: () => void;
  isAuth: boolean;
  loggedUser: UserDto | undefined,
  loading: boolean
}

const authContext = createContext<AuthContext | undefined>(undefined);


type LoginInputs = {
  username: string
  password: string
}
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const loggedUser = useGetLoggedUser();
  const login = useLogin();
  const logout = useLogout();
  const isAuth = (loggedUser.data && !loggedUser.isError) || false;

  const {
    control,
    handleSubmit,
    clearErrors, reset,
    formState: { errors }
  } = useForm<LoginInputs>();
  const openLoginModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
    reset();
  };
  const logoutCurrentUser = () => {
    setLoading(true);
    logout.mutate(undefined, {
      async onSuccess() {
        await loggedUser.refetch();
        setLoading(false);
        setOpen(false);
      },
      onError() {
        setLoading(false);
      }
    });
  };
  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    setLoading(true);
    login.mutate(data, {
      async onSuccess() {
        await loggedUser.refetch();
        setLoading(false);
        setOpen(false);
      },
      onError() {
        setLoading(false);
      }
    });
  };
  return <authContext.Provider value={{
    openLoginModal,
    isAuth,
    loggedUser: loggedUser.data,
    logoutCurrentUser,
    loading
  }}>
    {children}

    <Modal
      open={open}
      onCancel={handleCancel}
      title="Login"
      footer={[
        <></>
      ]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"flex flex-col gap-4"}>
          <div>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Input {...field} placeholder="Username" />
              )}
            />
            {errors.username && <span className={"text-red-400"}>This field is required</span>}
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Input  {...field} placeholder="Password" type={"password"} />
              )}
            />
            {errors.password && <span className={"text-red-400"}>This field is required</span>}
          </div>
          <div className={"flex justify-end gap-2"}>
            <Button key="back" htmlType={"button"} onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType={"submit"} loading={loading} onClick={() => {
              clearErrors();
            }}>
              Login
            </Button>
          </div>
        </div>

      </form>
    </Modal>
  </authContext.Provider>;
};


export default AuthProvider;

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("useAuth should be used inside AuthProvider");
  return context;
};