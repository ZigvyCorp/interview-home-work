import { Input } from 'antd';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';
import { SizeType } from 'antd/es/config-provider/SizeContext';


const { TextArea } = Input;

interface IInputProps {
  name: string
  control: any
  size?: SizeType
  placeholder?: string
  className?: string
  autoSize?: boolean | object
}

const AntdTextArea: React.FC<IInputProps> = ({
  control,
  name,
  autoSize,
  size,
  className,
  placeholder
}) => {

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Fragment>
          <TextArea
            {...field}
            autoSize={autoSize}
            size={size}
            className={className}
            placeholder={placeholder}
          />
          <p className="text-red-600">{error?.message}</p>
        </Fragment>
      )}
    />
  );
};

export default AntdTextArea;