import { Control, FieldErrors } from "react-hook-form";

import { ControlInput } from "@/components/controlElement";

import { LOGIN_FORM_CONFIG } from "@/modules/auth";

export interface ILoginForm {
  className?: string;
  loading?: boolean;
  control: Control<any>;
  errors: FieldErrors<any>;
  handleSubmit: (e: any) => void;
}

const LoginForm = ({ className = "", control, errors, loading, handleSubmit }: ILoginForm) => {
  return (
    <form className={`${className} space-y-[16px]`} onSubmit={handleSubmit}>
      {LOGIN_FORM_CONFIG.map((item, index) => {
        return (
          <div className="space-y-[12px]" key={index}>
            <label>{item.label}</label>
            <ControlInput key={index} control={control} name={item.key} type={item.type} errors={errors} />
          </div>
        );
      })}
      <div className="flex justify-end">
        <button type="submit" className="bg-main text-white rounded-md px-[24px] py-[10px]" disabled={loading}>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
