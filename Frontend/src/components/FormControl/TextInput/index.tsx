import './style.scss';

import React, { type FC, useRef, useState } from 'react';

import { type Control, Controller, type FieldErrors } from 'react-hook-form';

import { InputText } from 'primereact/inputtext';

import { OverlayPanel } from 'primereact/overlaypanel';

export interface ITextInputProps {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  isRequired?: boolean;
  disabled?: boolean;
  control: Control<any>;
  errors: FieldErrors | undefined;
  autoFocus?: boolean;
  isFontWeightLabel?: boolean;
  readOnly?: boolean;
  defaultValue?: string;
  className?: string;
}

const TextInput: FC<ITextInputProps> = ({
  label = '',
  name,
  type,
  placeholder,
  isRequired = false,
  disabled = false,
  control,
  errors,
  autoFocus = false,
  isFontWeightLabel = false,
  readOnly = false,
  defaultValue = '',
  className = '',
}: ITextInputProps) => {
  // #region data
  const op = useRef<OverlayPanel | null>(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  // #endregion

  // #region event
  const handleOnClickShowPassword = (): void => {
    setIsShowPassword(!isShowPassword);
  };
  // #endregion

  return (
    <div className="text-input">
      {label?.length > 0 && (
        <label
          htmlFor={name}
          style={isFontWeightLabel ? { fontWeight: 900 } : undefined}
        >
          {label}{' '}
          {isRequired && (
            <span className="text-red-500" style={{ fontWeight: 900 }}>
              *
            </span>
          )}
        </label>
      )}
      {type === 'password' && (
        <>
          <i
            className="pi pi-question-circle ml-2 cursor-pointer"
            onClick={(e) => op.current?.toggle(e)}
          />
          <OverlayPanel ref={op} className="w-18rem">
            Password must have ...
          </OverlayPanel>
        </>
      )}
      <div className={type === 'password' ? 'p-input-icon-right' : ''}>
        <Controller
          control={control}
          name={name}
          defaultValue={defaultValue}
          render={({ field: { onChange, value, ref } }) => (
            <InputText
              id={name}
              type={
                type === 'password'
                  ? isShowPassword
                    ? 'text'
                    : 'password'
                  : type
              }
              placeholder={placeholder}
              onChange={(e) => {
                onChange(e.target.value);
              }}
              value={value}
              autoFocus={autoFocus}
              ref={ref}
              tooltip={errors != null ? errors.message?.toString() : undefined}
              tooltipOptions={{ position: 'bottom' }}
              readOnly={readOnly}
              disabled={disabled}
              className={className}
            />
          )}
        />

        {type === 'password' && (
          <i
            className={isShowPassword ? 'pi pi-eye' : 'pi pi-eye-slash'}
            onClick={handleOnClickShowPassword}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
    </div>
  );
};

export default TextInput;
