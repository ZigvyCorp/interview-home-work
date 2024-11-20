import { Select } from 'antd';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import React, { Fragment } from 'react';
import { Controller } from 'react-hook-form';

const { Option } = Select;

interface ISelectProps {
  size?: SizeType;
  control: any
  name: string;
  values: { id: string | number; name: string | number }[];
  className?: string;
  defaultValue?: string
  showSearch?: boolean
  mode: "multiple" | "tags" | undefined
  placeholder?: string
}

const AntdSelect: React.FC<ISelectProps> = ({ control, name, values, size, className, defaultValue, showSearch, mode, placeholder }) => {
  return (
    <Fragment>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Fragment>
            <Select {...field} size={size} className={className} defaultValue={defaultValue} showSearch={showSearch} mode={mode} placeholder={placeholder}>
              {values.map((item: { id: string | number; name: string | number }) => (
                <Option key={item.id} values={item.name}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <p className="text-red-600">{error?.message}</p>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default AntdSelect;