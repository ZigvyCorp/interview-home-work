import { Input } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';

interface IInputProps {
    name: string
    control: any
    type?: string
    size?: SizeType
    placeholder?: string
    prefix?: JSX.Element
    className?: string
    suffix?: JSX.Element
}

const InputPassword: React.FC<IInputProps> = ({
  name,
  control,
  type,
  size,
  placeholder,
  prefix,
  className,
  suffix,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Fragment>
          <Input.Password
            {...field}
            type={type}
            size={size}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            className={className}
          />
          <p className="text-red-600">{error?.message}</p>
        </Fragment>
      )}
    />
  );
};

export default InputPassword;