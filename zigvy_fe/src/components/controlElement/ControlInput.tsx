import { Control, Controller, FieldErrors } from "react-hook-form";

import { Input } from "@/components/common";

// import { CustomInput } from "atoms";

export interface IControlInput {
  className?: string;
  control: Control<any>;
  name: string;
  errors?: FieldErrors<any>;
  disable?: boolean;
  type?: string;
  handlePressEnter?: any;
  [key: string]: any;
}

const ControlInput = ({
  className = "",
  control,
  disable,
  name,
  type,
  errors,
  handlePressEnter,
  ...props
}: IControlInput) => {
  return (
    <div className="w-full">
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Input
              className={`${className} ${errors && errors[name] && "!border-[#E41616]"}`}
              type={type || "text"}
              value={field.value}
              disable={disable}
              onPressEnter={handlePressEnter}
              onChange={field.onChange}
              {...props}
            />
          );
        }}
      />
      {errors && errors[name] && (
        <p className="text-[#E41616] text-[12px] font-normal pt-[6px]">{errors[name]!.message as string}</p>
      )}
    </div>
  );
};

export default ControlInput;
