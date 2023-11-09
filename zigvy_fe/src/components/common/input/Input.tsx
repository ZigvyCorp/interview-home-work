import { Input as AntInput } from "antd";

export interface IInput {
  className?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: any) => void;
  onPressEnter?: (e: any) => void;
  [key: string]: any;
}

const Input = ({
  className = "",
  type = "text",
  name,
  disabled,
  placeholder,
  value,
  onChange,
  onPressEnter,
  ...props
}: IInput) => {
  return (
    <AntInput
      className={`${className} px-[12px] py-[10px] border-grey_textfield hover:border-text_color focus:shadow-none`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      onChange={onChange}
      onPressEnter={onPressEnter}
      {...props}
    />
  );
};

export default Input;

Input.Search = AntInput.Search;
